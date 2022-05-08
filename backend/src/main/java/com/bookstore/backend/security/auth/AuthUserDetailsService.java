package com.bookstore.backend.security.auth;

import com.bookstore.backend.dao.UserDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.bookstore.backend.entity.User;

@Service
public class AuthUserDetailsService implements UserDetailsService {

    @Autowired
    private UserDao userDao;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        java.util.Optional<User> user = userDao.getUser(username);

        if (!user.isPresent()) {
            throw new UsernameNotFoundException(String.format("No user found with username '%s'.", username));
        } else {
            return AuthUserFactory.create(user.get());
        }
    }
}
