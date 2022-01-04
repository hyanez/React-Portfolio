import React from "react";
import "../styles/Project.css";
import ftnsJnks from "../images/ftns-jnks-demo.png";
import weatherDash from "../images/weather-dashboard-mockup-2.png";
import foodE from "../images/FoodE-proj.png";

export default function Project() {
  return (
    <div class="project-header">
      <div class="proj-title">PROJECTS</div>
      <div class="project-section">
        <div class="first-proj">
          <img src={foodE} alt="Ftns-Jnks Project" class="proj-photo"></img>
          <div class="card-body">
            <h5 class="card-title">FoodE</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              HTML5 / CSS / JS / Spoontacular API / Bulma
            </h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div class="links">
              <a
                href="https://mwathomas.github.io/project-1/"
                class="card-link"
              >
                Deployed link
              </a>
              <a
                href="https://github.com/mwathomas/project-1"
                class="card-link"
              >
                Github link
              </a>
            </div>
          </div>
        </div>
        <div class="second-proj">
          <img src={ftnsJnks} alt="Ftns-Jnks Project" class="proj-photo"></img>
          <div class="card-body">
            <h5 class="card-title">Ftns-Jnks</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              HTML5 / CSS / Node.JS / MySQL / Sequelize / Handlebars
            </h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div class="links">
              <a href="#" class="card-link">
                Deployed link
              </a>
              <a href="https://github.com/hyanez/Ftnss-Jnks" class="card-link">
                Github link
              </a>
            </div>
          </div>
        </div>
        <div class="third-proj">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div class="links">
              <a href="#" class="card-link">
                Card link
              </a>
              <a href="#" class="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
        <div class="fourth-proj">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div class="links">
              <a href="#" class="card-link">
                Card link
              </a>
              <a href="#" class="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
        <div class="fifth-proj">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div class="links">
              <a href="#" class="card-link">
                Card link
              </a>
              <a href="#" class="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
