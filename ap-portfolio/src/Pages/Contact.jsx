import React, { useState } from "react";

import '../Styles/Contact.css'

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    function encode(data) {
        return Object.keys(data)
          .map(
            (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
          )
          .join("&");
      }

    const handleSubmit = event => {
        event.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlenconded"},
            body: encode({ "form-name": "contact", name, email, message })
        })
        .then(() =>  alert("Message sent! Thanks for completing the form. I'll be in touch soon!"))
        .catch((error) => alert(error))
      };

    return(
        <div className="contact-container">

                <h1 className="page-header">Contact Me</h1>
                <section id="contact-section">
                    <div classname="contact-form">
                        <form className="contact-wrapper" onSubmit={handleSubmit}>
                            <div className="fname">
                                <input type="text" placeholder="FIRST & LAST NAME"
                                name="name" required
                                onChange={event => setName(event.target.value)}
                                />
                            </div>    
                                
                            <div className="emailaddy">
                                <input type="email" placeholder="EMAIL ADDRESS"
                                name="email" required
                                onChange={event => setEmail(event.target.value)}
                                />
                            </div>
                            
                        {/* Message section */}
                            <div className="message">
                                <label>Message</label>
                                <textarea class="form-control" 
                                rows="10" name="msg" required 
                                onChange={event => setMessage(event.target.value)}
                                />
                            </div>

                            <button className="button-73" id="submit" type="submit" value="submit">
                            <span className="send-btn">Submit</span>
                                </button>
                        </form>
                        </div>
                        </section>


                

                        </div>

    );

    
};

export default Contact;