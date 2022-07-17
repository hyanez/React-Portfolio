import React from "react";
import "../styles/Project.css";
import ftnsJnks from "../images/ftns-jnks-demo.png";
import weatherDash from "../images/weather-dashboard-mockup-2.png";
import foodE from "../images/FoodE-proj.png";
import contextify from "../images/contextify-proj.png";
import teamProfile from "../images/team-profile.png";
import passGenerator from "../images/pass-generator.png";

export default function Project() {
  return (
    <div class="project-header">
      <div class="proj-title">PROJECTS</div>
      <div class="project-section">
        <div class="first-proj">
          <img src={foodE} alt="FoodE Project" class="proj-photo"></img>
          <div class="card-body">
            <h5 class="card-title">FoodE</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              HTML5 / CSS / JS / Spoontacular API / Bulma
            </h6>
            <p class="card-text">
              Foode finds recipes across the web that use what you have lying
              around. Every busy adult has to ask themselves the questions--
              What’s for dinner? So we created a simple and easy application
              where it generates a random dish. This removes the need to think
              about what to cook for yourself or your family after a very long
              day at work. Not only does it save time from going to the grocery
              store, but it you can also save your recipes to use another day.
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
              This all in one RESTful API application allows you to plan a
              workout around your fitness goals with easy to use meal
              generators, and fitness plan recommendations. Models, routes, and
              our database were created in the back-end, to be used by
              handlebars to create the front-end. A user is able to login and
              personalize, organize, and choose their own workouts.
            </p>
            <div class="links">
              <a href="https://ftnss-jnks.herokuapp.com/" class="card-link">
                Deployed link
              </a>
              <a href="https://github.com/hyanez/Ftnss-Jnks" class="card-link">
                Github link
              </a>
            </div>
          </div>
        </div>
        <div class="third-proj">
          <img
            src={contextify}
            alt="Contextify Project"
            class="proj-photo"
          ></img>
          <div class="card-body">
            <h5 class="card-title">Contextify</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              HTML5 / CSS / Node.JS / MongoDB / Mongoose / React /Express.JS
            </h6>
            <p class="card-text">
              Contextify is a full stack MERN application that that offers
              visual representation of data. Contextify can handle general
              weight, distance, and time conversions as well as abstract
              conversions. The purpose of this application is to help users
              quantify their metrics in a more digestible context
            </p>
            <div class="links">
              <a
                href="https://protected-tundra-53056.herokuapp.com/"
                class="card-link"
              >
                Deployed Link
              </a>
              <a
                href="https://github.com/ChrisIgg/contextify-main"
                class="card-link"
              >
                Github Link
              </a>
            </div>
          </div>
        </div>
        <div class="fourth-proj">
          <img
            src={weatherDash}
            alt="Weather Dashboard"
            class="proj-photo"
          ></img>
          <div class="card-body">
            <h5 class="card-title">Weather Dashboard</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              HTML / CSS / OpenWeather API
            </h6>
            <p class="card-text">
              Third-party APIs allow developers to access their data and
              functionality by making requests with specific parameters to a
              URL. Developers are often tasked with retrieving data from another
              application's API and using it in the context of their own. The
              Weather Dashboard uses the OpenWeather One Call API to retrieve
              weather data for cities.
            </p>
            <div class="links">
              <a
                href="https://hyanez.github.io/Weather-Dashboard/"
                class="card-link"
              >
                Deployed Link
              </a>
              <a
                href="https://github.com/hyanez/Weather-Dashboard"
                class="card-link"
              >
                Github link
              </a>
            </div>
          </div>
        </div>
        <div class="fifth-proj">
          <img
            src={teamProfile}
            alt="Team Profile Generator"
            class="proj-photo"
          ></img>
          <div class="card-body">
            <h5 class="card-title">Team Profile Generator</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              HTML /CSS / JS / Node.js
            </h6>
            <p class="card-text">
              A program that builds a Node.js command-line application that
              takes in information about employees on a software engineering
              team, then generates an HTML webpage that displays summaries for
              each person.
            </p>
            <div class="links">
              <a
                href="https://watch.screencastify.com/v/dxQfH0Nml39GM7PzMZLF"
                class="card-link"
              >
                Deployed Link
              </a>
              <a
                href="https://github.com/hyanez/TEAM-PROFILE-GENERATOR"
                class="card-link"
              >
                Github link
              </a>
            </div>
          </div>
        </div>
        <div class="sixth-proj">
          <img
            src={passGenerator}
            alt="Password Generator"
            class="proj-photo"
          ></img>
          <div class="card-body">
            <h5 class="card-title">Password Generator</h5>
            <h6 class="card-subtitle mb-2 text-muted">HTML / CSS / JS</h6>
            <p class="card-text">
              The following program generates a secure random password that
              includes special characters, numbers, capital letters, and lower
              case letters to provide greater security to sensitive data. This
              program also uses JavaScript in addition to using arrays, strings,
              fumctions and methods like .split() and .concat().
            </p>
            <div class="links">
              <a
                href="https://hyanez.github.io/HW3-PASSWORD-GENERATOR/"
                class="card-link"
              >
                Deployed Link
              </a>
              <a
                href="https://github.com/hyanez/HW3-PASSWORD-GENERATOR"
                class="card-link"
              >
                Github Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
