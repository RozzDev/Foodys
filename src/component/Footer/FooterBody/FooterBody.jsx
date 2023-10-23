import React from 'react'
import {ImTwitter, ImLinkedin2, ImFacebook, ImYoutube} from 'react-icons/im'
import './FooterBody.css'

const FooterBody = () => {
  return (
    <div>
      <div className="F-wrapper">
        <div className="f-container">
            <div className="first-f">
                <span className="ones">About us</span>
                <span className="ones-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus et dolor blanditiis consequuntur ex voluptates perspiciatis omnis unde minima expedita.</span>
                <div className="social">
                    <ImTwitter size={15} 
                    color='orange'
                    onMouseOver={({target})=>target.style.color="black"}
                    onMouseOut={({target})=>target.style.color="orange"}
                    />
                    <ImLinkedin2 size={15}
                    color='orange'
                    onMouseOver={({target})=>target.style.color="black"}
                    onMouseOut={({target})=>target.style.color="orange"}
                    />
                    <ImFacebook size={15} 
                    color='orange'
                    onMouseOver={({target})=>target.style.color="black"}
                    onMouseOut={({target})=>target.style.color="orange"}
                    />
                    <ImYoutube size={15} 
                    color='orange'
                    onMouseOver={({target})=>target.style.color="black"}
                    onMouseOut={({target})=>target.style.color="orange"}
                    />
                </div>
            </div>
            <div className="second-f">
                <div className="up">
                    <span className="ones">Opening Hour</span>
                    <div className="spans-down">
                        <span className="ones-h">Monday-Saturday</span>
                        <span className="ones-p">5AM - 10PM</span>
                    </div>
                </div>
                <div className="up">
                    <span className="ones">Contact info</span>
                    <div className="spans-down">
                        <span className="ones-h">Address</span>
                        <span className="ones-p">34 Street Name, City Name Here, United States</span>
                    </div>
                    <div className="spans-down">
                        <span className="ones-h">Phone</span>
                        <span className="ones-p">+1 242 4942 290</span>
                    </div>
                    <div className="spans-down">
                        <span className="ones-h">Email</span>
                        <span className="ones-p">test@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className="third-f">
                <span className="ones">Quick Links</span>
                <span>About</span>
                <span>Terms of Use</span>
                <span>Disclaimer</span>
                <span>Contact</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FooterBody
