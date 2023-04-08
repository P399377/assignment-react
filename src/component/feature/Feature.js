import React from "react";
import "./feature.css";

const Feature = () => {
  return (
    <div className="container">
      <p className="short-news">Short Reads</p>
      <div className="short-wrapper">
        <div className="short-image-wrapper">
          <div className="short-image">
            <img src="imagesno1.jpg" alt="" />
          </div>
          <div>
            <h4>Lorem, ipsum.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, praesentium!
            </p>
          </div>
        </div>
        <div className="short-image-wrapper">
          <div className="short-image">
            <img src="imagesno1.jpg" alt="" />
          </div>
          <div>
            <h4>Lorem, ipsum.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, praesentium!
            </p>
          </div>
        </div>
        <div className="short-image-wrapper">
          <div className="short-image">
            <img src="imagesno1.jpg" alt="" />
          </div>
          <div>
            <h4>Lorem, ipsum.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, praesentium!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
