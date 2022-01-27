import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <section class="contact">
      <div class="content">
        <h2>Contact Me</h2>
        <p>
          Fill out the form below if you have any questions or comments and I
          will get back to you as soon as I can.
        </p>
      </div>
      <div class="container">
        <div class="contactInfo">
          <div class="box">
            <div class="icon">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
            </div>
            <div class="text">
              <h3>Address</h3>
              <p>81 Franklin Ave New Rochelle, NY 10804</p>
            </div>
          </div>
          <div class="box">
            <div class="icon">
              <i class="fa fa-phone" aria-hidden="true"></i>
            </div>
            <div class="text">
              <h3>Phone</h3>
              <p>914-740-5292</p>
            </div>
          </div>
          <div class="box">
            <div class="icon">
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
            </div>
            <div class="text">
              <h3>Email</h3>
              <p>hugodavidyanez@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="contactForm">
          <form>
            <h2>Send me an Email</h2>
            <div class="inputBox">
              <input type="text" name="" required="required"></input>
              <span>Full Name</span>
            </div>
            <div class="inputBox">
              <input type="text" name="" required="required"></input>
              <span>Email</span>
            </div>
            <div class="inputBox">
              <textarea required=""></textarea>
              <span>Type your Message...</span>
            </div>
            <div class="inputBox">
              <input type="submit" name="" value="Send"></input>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
