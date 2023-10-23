import React from 'react'
import {IoLocation, IoPhonePortraitOutline} from 'react-icons/io5'
import {BiLogoGmail} from 'react-icons/bi'
import emailjs from '@emailjs/browser';
import './ContactC.css'

const ContactC = () => {
    const form = React.useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qlqzeiq', 'template_0ffrok2', form.current, '0aNSDPz1pQIKgx87Q')
          .then((result) => {
              alert("Message Sent");
        }, (error) => {
              alert("Message not sent");
        });

        e.target.reset()
        
    }
  return (
    <div>
      <section className="C-wrapper">
        <div className="C-container">
            <div className="C-left">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="n-phone">
                        <div className="name-n">
                            <label>Name</label>
                            <input type="text" required name="from_name" />
                        </div>
                        <div className="phone-n">
                            <label>Phone</label>
                            <input type="tel" required name="from_phone" i />
                        </div>
                    </div>
                    <label>Email</label>
                    <input type="email" required name="from_email"/>

                    <label>Message</label>
                    <textarea name="message" id="" cols="30" rows="10"></textarea>

                    <button type='submit'>Send Message</button>
                </form>
            </div>
            <div className="C-right">
                <div className="c-righth">
                    <h1>Contact Detail</h1>
                </div>
                <div className="loca spot">
                    <IoLocation color='orange' size={33}/>
                    <span>34 Street Name, City Name Here, United States</span>
                </div>
                <div className="phon spot">
                    <IoPhonePortraitOutline color='orange' size={33}/>
                    <span>+1 242 4942 290</span>
                </div>
                <div className="mail spot">
                    <BiLogoGmail color='orange' size={33}/>
                    <span>test@gmail.com</span>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default ContactC
