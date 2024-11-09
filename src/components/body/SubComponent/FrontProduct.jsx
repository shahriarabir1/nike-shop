import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product1 from "./Product1";
import Product2 from "./Product2";
import Product3 from "./Product3";
import Product4 from "./Product4";
const FrontProduct = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1724 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1724, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="w-[67vw] mx-auto">
      <div className="w-[35vw]">
        <Carousel showDots={true} arrows={false} responsive={responsive}>
          <div className="mb-10">
            <Product1 />
          </div>
          <div>
            <Product2 />
          </div>
          <div>
            <Product3 />
          </div>
          <div>
            <Product4 />
          </div>
          <div>
            <Product4 />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default FrontProduct;
