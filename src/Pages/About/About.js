import React from 'react';
import Typical from 'react-typical';
import about from '../../images/about/about.jpg'

const About = () => {
    return (
        <div className="container shadow-lg rounded-3 my-5 p-5" id="about" style={{background: "rgba(164, 199, 252 , 0.2)"}}>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2">

            <div className="col">
            <img src={about} className="rounded-circle img-fluid" alt="" />
                </div>


                <div className="col">
                <h1 className="text-light">
                    <Typical
                                loop={Infinity}
                                steps={[
                                    "About Me",
                                    1000
                                ]}
                                />
                    </h1>
                <p className="text-light">
                    <Typical
                                loop={Infinity}
                                steps={[
                                    "My name is Mozammel Hoq. I'm a Front End Developer based in Bangladesh. I describe myself as a passionate developer who loves coding, open source, and the web platform, passion for responsive website design, and development. Would like to build a successful career in the field of web development. ",
                                    1000
                                ]}
                                />
                    </p>
                    <h1 className="text-light fw-bold mt-5">Skill</h1>
                    <div class="progress">
                        <div class="progress-bar w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><span className="fw-bold">HTML5</span></div>
                    </div><br />
                    <div class="progress">
                        <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><span className="fw-bold">CSS3</span></div>
                    </div><br />
                    <div class="progress">
                        <div class="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><span className="fw-bold">JavaScript</span></div>
                    </div><br />
                    <div class="progress">
                        <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><span className="fw-bold">ReactJs</span></div>
                    </div>
                </div>


                

                
            </div>
        </div>
    );
};

export default About;