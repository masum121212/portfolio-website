import React from 'react';
import Typical from 'react-typical';
import './Header.css';
import profil from '../../images/header/profile.jpg'
const Header = () => {
    return (
        <div className="container-fluid background p-5">
          
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2">
                <div className="col mt-5">
                <span className="text-light fw-bold fs-4">
              Hello, I'M <span className="text-warning"><Typical 
                loop={Infinity}
                steps={[
                    "MD Mozammel Hoq Masum",
                    2000
                ]}
              /></span>
                </span>
                <h1 className="text-light">
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Dev  💻",
                    3000,
                    "Frontend Dev 🎯",
                    3000,
                    "MERN Stack Dev 😎",
                    3000,
                    "React Js Dev ⚛️",
                    3000,
                    "React Native Dev 📱",
                    3000,
                  ]}
                />
                </h1>
                
                <div className="my-5">
                    <button className="btn btn-outline-light me-5">Hire Me</button>
                    <a href="mozammel_hoq_resume.pdf" download="mozammel_hoq_resume.pdf">
            <button className="btn btn-outline-light">Get Resume</button>
            </a>
                </div>
                </div>

                        
                
                <div className="col">
                <img src={profil} className="rounded-circle img-fluid" alt="" />
                </div>
                
            </div>
            <div className="m-5">
            
            
            </div>
        </div>
    );
};

export default Header;