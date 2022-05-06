import React from "react";
import { Carousel } from "antd";

class BookStoreCarousel extends React.Component {
  createContent = (ctx) => {
    const images = ctx.keys().map(ctx);
    let result = [];
    for (let i = 0; i < ctx.keys().length; i++) {
      let img = images[i];
      result.push(
        <div key={i}>
          <img alt={"poster " + i.toString()} src={img} />
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
