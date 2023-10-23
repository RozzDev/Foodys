import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div>
      <div className="N-wrapper">
        <div className="N-container">
          <div className="N-bodys">
            <span>Subscribe NewsLetters</span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, saepe
              repudiandae ab ducimus tenetur natus quia fuga quod necessitatibus
              sapiente nobis ea veniam accusantium deserunt maiores ratione id
              esse totam.
            </span>
            <div className="N-body">
              <input type="text" placeholder="Email" mailto='lightsamuel10@gmail.com'/>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
