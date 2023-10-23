import React from "react";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

const BlogNews = () => {
  return (
    <div>
      <div className="b-wrapper">
        <div className="b-container">
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
                <span>How to cook Slide</span>
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
          <div className="b-body">
            <div className="b-hbody">
            <Link to="/detailthree">
                <img src="./blog1.jpg" alt="" />
              </Link>
              <div className="b-words">
                <span>How to cook Chicken Pie</span>
                <span>
                  <SlCalender /> october13 ,2023
                </span>
                <span>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </span>
                <Link to="/detailthree">
                  <button>Read More</button>
                </Link> 
              </div>
            </div>
            <div className="b-hbody">
            <Link to="/detailfour">
                <img src="./blog2.jpg" alt="" />
              </Link>
              <div className="b-words">
                <span>How to cook Rice</span>
                <span>
                  <SlCalender /> october13,2023
                </span>
                <span>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </span>
                <Link to="/detailfour">
                  <button>Read More</button>
                </Link> 
              </div>
            </div>
          </div>
          <div className="b-body">
            <div className="b-hbody">
            <Link to="/detailfive">
                <img src="./blog3.jpg" alt="" />
              </Link>
              <div className="b-words">
                <span>How to bake Cookies</span>
                <span>
                  <SlCalender /> october13 ,2023
                </span>
                <span>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </span>
                <Link to="/detailfive">
                  <button>Read More</button>
                </Link> 
              </div>
            </div>
            <div className="b-hbody">
            <Link to="/detailsix">
                <img src="./blog4.jpg" alt="" />
              </Link>
              <div className="b-words">
                <span>How to bake Sweet Cake</span>
                <span>
                  <SlCalender /> october13,2023
                </span>
                <span>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </span>
                <Link to="/detailsix">
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

export default BlogNews;
