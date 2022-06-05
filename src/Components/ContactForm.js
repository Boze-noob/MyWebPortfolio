import "../Css/ContactForm.css";
import React, { useRef } from 'react';
import emailjs from "emailjs-com";  
import Button from "./Button.js"

function ContactForm(){

    const form = useRef();

    function sendEmail(e){
        e.preventDefault();
        console.log("we enter into send email function");
        console.log(form.current);
        emailjs.sendForm('service_s1jtbm4', 'template_z045w7a', form.current, 'zr-D1roI6Vu2aq_Q3')
          .then((result) => {
            alert('Email has been send! Thank you!');
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
              alert('Some error happen, please try again later!');
          });
          e.target.reset();
          
      }


    return(
               <form ref={form} onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="form_group">
                            <input type="text" className="form_field" placeholder="Name" name="name" />
                            <label for="name" className="form_label">Name</label>
                        </div>
                        <div className="form_group">
                            <input type="email" className="form_field" placeholder="Name" name="email" />
                            <label for="name" className="form_label">Email</label>
                        </div>
                        <div className="form_group">
                            <input type="text" className="form_field" placeholder="Name" name="subject" />
                            <label for="name" className="form_label">Subject</label>
                        </div>
                        <div className="form_group">
                            <textarea className="form_field" rows="8" placeholder="Your message" name="message"></textarea>
                            <label for="name" className="form_label">Message</label>
                        </div>
                        <div className="Button">
                        <input type="submit" className="btn" value="Send Message" style={{
        borderWidth: 2,
        borderColor: "#21b6ae",
        fontFamily: "Lucida Sans",
        color: 'white',
        padding: '10px 35px 10px 35px',
        backgroundColor: "transparent",
        fontSize: "large",
        marginTop : "20px"
    }}></input>
                        </div>
                    </div>
                </form>
    );
}

export default ContactForm;