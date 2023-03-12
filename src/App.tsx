import React from "react";
import './App.css'
import { MDBContainer } from "mdb-react-ui-kit";

import avatar from './assets/avatar.jpg'

const App = () => {
  return (
    <MDBContainer className="my-5 d-flex flex-column justify-content-center align-items-center text-center">
      <img
        src={avatar}
        className="rounded-circle mb-3"
        style={{ width: "225px" }}
        alt="Avatar"
      />

      <h2>Richard Höchenberger</h2>
      <h5>
       <div>
          <span className="badge rounded-pill badge-light text-muted">Data Science</span>
          <span className="badge rounded-pill badge-light text-muted">Open Source</span>
          <span className="badge rounded-pill badge-light text-muted">Project Management</span>
        </div>
      </h5>

      <div className="pt-2">
        <p className="fs-5">
          Hi! I'm Richard, a data scientist, software engineer, and project manager with a Ph.D. in experimental psychology.
        </p>
        <p className="fs-5">
          I love sharing code and helping people succeed.
        </p>
        <p className="fs-5">
          Please find my up-to-date profile and portfolio on LinkedIn.
        </p>
      </div>

      <div>
        <a className="btn btn-secondary fs-6 m-3 btn-block" href="https://www.linkedin.com/in/hoechenberger/" role="button">
          <i className="fab fa-linkedin me-2"></i>LinkedIn Profile
        </a>
        <a className="btn btn-secondary fs-6 m-3 btn-block" href="https://github.com/hoechenberger" role="button">
          <i className="fab fa-github me-2"></i>GitHub Profile
        </a>

        <a className="btn btn-secondary fs-6 m-3 btn-block" href="https://scholar.google.com/citations?user=CJg7pA4AAAAJ&hl=en" role="button">
          <i className="fab fa-google me-2"></i>Google Scholar
        </a>

        <a className="btn btn-secondary fs-6 m-3 mt-5 btn-block" href="mailto:richard@hoechenberger.net" role="button">
          <i className="fa fa-envelope me-2"></i>Send me an email
        </a>
      </div>
    </MDBContainer>
  );
}

export default App;
