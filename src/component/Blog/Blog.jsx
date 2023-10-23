import React from "react";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <div className="b-wrapper">
        <div className="b-container">
          <div className="r-head">
            <h1>Blog</h1>
          </div>
          <div className="b-body">
            <div className="b-hbody">
              <Link to="/detailone">
                <img src="./blog5.jpg" alt="" />
              </Link>
              <div className="b-words">
                <span>How to cook Paste</span>
                <span>
                  <SlCalender /> october13 ,2023
                </span>
                <span>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </span>
                <Link to="/detailone">
                  <button>Read More</button>
                </Link>
              </div>
            </div>
            <div className="b-hbody">
              <Link to="/detailtwo">
                <img src="./bog6.jpg" alt="" />
              </Link>
              <div className="b-words">
                <span>How to cook slide</span>
                <span>
                  <SlCalender /> october13,2023
                </span>
                <span>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </span>
                <Link to="/detailtwo">
                  <button>Read More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
