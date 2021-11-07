import React, { Component } from 'react'
import './ContactUs.css'
export class ContactUs extends Component {
    render() {
        return (
            <div class="body">
                <div class="contact-form">
    <h1>Contact Us</h1>
    <div class="txtb">
      <label>Full Name :</label>
      <input type="text" name="" value="" placeholder="Enter Your Name"></input>
    </div>

    <div class="txtb">
      <label>Email :</label>
      <input type="email" name="" value="" placeholder="Enter Your Email"></input>
    </div>

    <div class="txtb">
      <label>Phone Number :</label>
      <input type="text" name="" value="" placeholder="Enter Your Phone Number"></input>
    </div>

    <div class="txtb">
      <label>Message :</label>
      <textarea></textarea>
    </div>
    <a class="contactbtn">Send</a>
  </div>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.8306258299694!2d96.13101525024864!3d16.834756588355134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1930000000021%3A0xf0971622cc91af73!2sLithan%20Myanmar!5e0!3m2!1sen!2smm!4v1632023564432!5m2!1sen!2smm"  allowfullscreen="" loading="lazy"></iframe>
            </div>
        )
    }
}

export default ContactUs