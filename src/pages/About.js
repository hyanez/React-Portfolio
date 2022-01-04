import React from "react";
import "../styles/About.css";
import selfPortrait from "../images/icon.jpeg";

export default function About() {
  return (
    <div>
      <div class="about-title">ABOUT ME</div>
      <div class="about-card">
        <div class="card-body">
          <img src={selfPortrait} alt="Self Portrait" class="photo"></img>
          <br></br>
          <p>
            Recent Graduate student from Fordham University. B.S. in Computer
            Science, and a minor in Cyber Security with extensive knowledge in
            C++, Javascript, CSS, HTML5, Bootstrap, and other Web APIs. Eager to
            learn more to expand my knowledge in Computer Science while
            expressing dedication and passion in the field. Energetic,
            responsible and determined to complete any given task effectively
            and efficiently in a timely manner. Capable to adapt to any work
            environment and hospitable when working with others.
          </p>
          <br></br>
          <p>
            Currently enrolled at Columbia Engineering Coding Bootcamp. Have
            extensive knowledge in multiple technologies such as Bulma CSS
            Framework, dynamically updating HTML files using Javascript, JQuery,
            and ajax.
          </p>
        </div>
      </div>
    </div>
  );
}
