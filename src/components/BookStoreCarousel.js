import React from "react";
import { Carousel } from "antd";
import "./BookStoreCarousel.css";

class BookStoreCarousel extends React.Component {
  createContent = (ctx) => {
    const images = ctx.keys().map(ctx);
    let result = [];
    for (let i = 0; i < ctx.keys().length; i++) {
      let img = images[i];
      console.log(img);
      result.push(
        <div key={i}>
          <img alt={i} src={img} />
        </div>
      );
    }
    return result;
  };

  render() {
    const requireContext = require.context(
      "../assets/carousel",
      true,
      /^\.\/.*\.jpg$/
    );

    return (
      <Carousel autoplay className={"carousel"}>
        {this.createContent(requireContext)}
      </Carousel>
    );
  }
}

export default BookStoreCarousel;
