import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/Navigation.css";

export default function Navigation({ currentPage, handlePageChange }) {
  /*class="nav-link active" aria-current="page" href="#"*/
  /*class="nav-link" href="#"*/

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark portfolio-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#about">
            Hugo Yanez
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={
                    currentPage === "About"
                      ? "nav-link active minor"
                      : "nav-link minor"
                  }
                  href="#about"
                  onClick={() => handlePageChange("About")}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    currentPage === "Project" ? "nav-link active" : "nav-link"
                  }
                  href="#projects"
                  onClick={() => handlePageChange("Project")}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    currentPage === "Resume" ? "nav-link active" : "nav-link"
                  }
                  href="#resume"
                  onClick={() => handlePageChange("Resume")}
                >
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    currentPage === "Contact" ? "nav-link active" : "nav-link"
                  }
                  href="#contact"
                  onClick={() => handlePageChange("Contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
