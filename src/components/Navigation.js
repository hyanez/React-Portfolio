import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navigation({ currentPage, handlePageChange }) {
  /*class="nav-link active" aria-current="page" href="#"*/
  /*class="nav-link" href="#"*/

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class={
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
              <li class="nav-item">
                <a
                  class={
                    currentPage === "Project" ? "nav-link active" : "nav-link"
                  }
                  href="#projects"
                  onClick={() => handlePageChange("Project")}
                >
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a
                  class={
                    currentPage === "Resume" ? "nav-link active" : "nav-link"
                  }
                  href="#resume"
                  onClick={() => handlePageChange("Resume")}
                >
                  Resume
                </a>
              </li>
              <li class="nav-item">
                <a
                  class={
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
