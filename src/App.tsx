import React from "react";
import './App.css'
import { MDBContainer, MDBBtn } from "mdb-react-ui-kit";

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

      <div className="mt-3">
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

      <div className="d-grid gap-3">
        <MDBBtn className="fs-6 mt-3" color='secondary' tag='a' href='https://www.linkedin.com/in/hoechenberger/'>
          <i className="fab fa-linkedin me-2"></i>LinkedIn Profile
        </MDBBtn>

        <MDBBtn className="fs-6" color='secondary' tag='a' href="https://github.com/hoechenberger">
          <i className="fab fa-github me-2"></i>GitHub Profile
        </MDBBtn>

        <MDBBtn className="fs-6" color='secondary' tag='a' href="https://scholar.google.com/citations?user=CJg7pA4AAAAJ&hl=en">
          <i className="fab fa-google me-2"></i>Google Scholar
        </MDBBtn>

        <MDBBtn className="fs-6 mt-4" color='secondary' tag='a' href="mailto:richard@hoechenberger.net">
          <i className="fa fa-envelope me-2"></i>Send me an email
        </MDBBtn>
      </div>
    </MDBContainer>
  );
}

export default App;
