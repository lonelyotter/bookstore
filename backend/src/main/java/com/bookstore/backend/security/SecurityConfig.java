package com.bookstore.backend.security;

import com.alibaba.fastjson2.JSON;
import com.bookstore.backend.security.auth.AuthUserDetail;
import com.bookstore.backend.security.auth.AuthUserDetailsService;

import com.bookstore.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;
import java.util.Collections;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private AuthUserDetailsService userDetailsService;

    @Autowired
    private UserService userService;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.cors().and().csrf().disable().httpBasic();

        http.authorizeRequests()
                .antMatchers("/api/register").permitAll()
                .anyRequest().authenticated();

        http.formLogin()
                .loginPage("/api/login").permitAll()
                .successHandler((req, res, auth) -> {
                    res.setStatus(HttpServletResponse.SC_OK);
                    AuthUserDetail user = (AuthUserDetail) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
                    res.setContentType("text/html; charset=UTF-8");
                    PrintWriter writer = res.getWriter();
                    writer.println(JSON.toJSON(userService.getUser(user.getUsername())));
                })
                .failureHandler((req, res, e) -> {
                    PrintWriter writer = res.getWriter();
                    res.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                    res.setContentType("text/html; charset=UTF-8");
                    if (e instanceof UsernameNotFoundException || e instanceof BadCredentialsException) {
                        writer.println("Wrong username or password");
                    } else if (e instanceof DisabledException) {
                        writer.println("You have been banned");
                    }
                })
                .and().logout().logoutUrl("/api/logout").logoutSuccessHandler((req, res, auth) -> {
                    PrintWriter writer = res.getWriter();
                    res.setStatus(HttpServletResponse.SC_OK);
                    res.setContentType("text/html; charset=UTF-8");
                    writer.println("Log out");
                }).permitAll();
    }

    @Bean
    public PasswordEncoder password() {
        return NoOpPasswordEncoder.getInstance();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowCredentials(true);
        configuration.setAllowedOrigins(Collections.singletonList("http://localhost:3000"));
        configuration.setAllowedHeaders(Collections.singletonList("*"));
        configuration.setAllowedMethods(Collections.singletonList("*"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration(("/**"), configuration);
        return source;
    }
}
