import React from 'react';
// import { Link } from 'react-router-dom';

import { HashLink as Link } from 'react-router-hash-link';
const Navbar = () => {
    return (
        <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <h1><a class="navbar-brand" href="https://mail.google.com/mail/u/0/#sent?compose=new">Mozammel Hoq ( Masum )</a></h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item m-4">
          <Link smooth to="#home"><button className="btn btn-outline-light">Home</button></Link>
        </li>
        <li class="nav-item m-4">
          <Link smooth to="#portfolio"><button className="btn btn-outline-light">Portfolio</button></Link>
        </li>
        <li class="nav-item m-4">
          <Link smooth to="#about"><button className="btn btn-outline-light">About Me</button></Link>
        </li>
        <li class="nav-item m-4">
          <Link smooth to="#contact"><button className="btn btn-outline-light">Contact Me</button></Link>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
    );
};

export default Navbar;