import React from 'react';
import hero_1 from '../../images/portfolio/hero-1.PNG';
import hero_2 from '../../images/portfolio/hero-2.PNG';
import hero_3 from '../../images/portfolio/hero-3.PNG';

import medical_1 from '../../images/portfolio/medical-1.PNG';
import medical_2 from '../../images/portfolio/medical-2.PNG';
import medical_3 from '../../images/portfolio/medical-3.PNG';

import honda_1 from '../../images/portfolio/honda-1.PNG';
import honda_2 from '../../images/portfolio/honda-2.PNG';
import honda_3 from '../../images/portfolio/honda-3.PNG';

const Portfolio = () => {
    return (



        <div className="container" id="portfolio">
            <h1 className="fw-bold text-light mb-5">My Portfolio</h1>
            
            <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3 g-5">
            <div class="col">
                <div class="card border-0 h-100">

                <img src={hero_1} className="card-img-top" alt="" />

                



                    <div class="card-body text-light shadow-lg"  style={{background:"rgba(27, 62, 116, 0.9)"}}>
                        <h5 class="card-title text-start">Bike Showroom Website</h5>
                        <p class="card-text text-start">
                        <span className="bg-secondary m-2 rounded-3">Html5</span><br />
                        <span className="bg-secondary m-2 rounded-3">Css3</span><br />
                        <span className="bg-secondary m-2 rounded-3">React js</span><br />
                        <span className="bg-secondary m-2 rounded-3">Bootstrap5</span><br />
                        <span className="bg-secondary m-2 rounded-3">Firebase</span><br />
                        <span className="bg-secondary m-2 rounded-3">Heroku</span>
                        </p>
                        <div className="text-start ">
                            <button className="btn btn-outline-light me-4"> Live Site <a href="https://bike-house-6d640.web.app/"><i class="fab fa-internet-explorer"></i></a></button>
                            <button className="btn btn-outline-light"> Github <a href="https://github.com/masum121212/bike-showroom-client"><i class="fab fa-github"></i></a></button>
                        </div>
                    </div>
                </div>
            </div>



            <div class="col">
                <div class="card border-0 h-100">

                <img src={medical_1} className="card-img-top" alt="" />

                



                    <div class="card-body text-light shadow-lg"  style={{background:"rgba(27, 62, 116, 0.9)"}}>
                        <h5 class="card-title text-start">Medical Service Website</h5>
                        <p class="card-text text-start">
                        <span className="bg-secondary m-2 rounded-3">Html5</span><br />
                        <span className="bg-secondary m-2 rounded-3">Css3</span><br />
                        <span className="bg-secondary m-2 rounded-3">React js</span><br />
                        <span className="bg-secondary m-2 rounded-3">Bootstrap5</span><br />
                        <span className="bg-secondary m-2 rounded-3">Firebase</span><br />
                        </p>
                        <div className="text-start ">
                            <button className="btn btn-outline-light me-4"> Live Site <a href="https://health-care-website-cd51d.firebaseapp.com/"><i class="fab fa-internet-explorer"></i></a></button>
                            <button className="btn btn-outline-light"> Github <a href="https://github.com/masum121212/healthcare-releted-website"><i class="fab fa-github"></i></a></button>
                        </div>
                    </div>
                </div>
            </div>



            <div class="col">
                <div class="card border-0 h-100 ">

                <img src={honda_1} className="card-img-top" alt="" />

                



                    <div class="card-body text-light shadow-lg" style={{background:"rgba(27, 62, 116, 0.9)"}}>
                    <h5 class="card-title text-start">Bike Shop Website</h5>
                        <p class="card-text text-start">
                        <span className="bg-secondary m-2 rounded-3">Html5</span><br />
                        <span className="bg-secondary m-2 rounded-3">Css3</span><br />
                        <span className="bg-secondary m-2 rounded-3">Javascript</span><br />
                        <span className="bg-secondary m-2 rounded-3">Bootstrap5</span><br />
                        <span className="bg-secondary m-2 rounded-3">Netlify</span><br />
                        </p>
                        <div className="text-start ">
                            <button className="btn btn-outline-light me-4"> Live Site <a href="https://masums-honda-cbr.netlify.app/"><i class="fab fa-internet-explorer"></i></a></button>
                            <button className="btn btn-outline-light"> Github <a href="https://github.com/masum121212/honda-field"><i class="fab fa-github"></i></a></button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        </div>
    );
};

export default Portfolio;