import React from 'react';
import emailjs from 'emailjs-com';
import Typical from 'react-typical';
import './Contact.css';

const Contact = () => {
    const handleEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_fxe11rt', e.target, 'user_F8iTMi0BgAlCXV4jqe0j4')
      .then((result) => {
          alert('Message send successfully !')
      }, (error) => {
          alert(error.message)
      });
      e.target.reset();
    }
    return (
        <div className="container shadow-lg rounded-3 image my-5 py-5" id="contact">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2">
                <div className="col">
                <h1 className="text-light">
                    <Typical
                                loop={Infinity}
                                steps={[
                                    "Contact Info 📩",
                                    3000
                                ]}
                                />
                    </h1>
                    <div className="fs-3 pt-5">
                    <a href="#"><i class="fab fa-facebook-square text-light p-2"></i></a>
                    <a href="#"><i class="fab fa-linkedin text-light p-2"></i></a>
                    <a href="#"><i class="fab fa-github-square text-light p-2"></i></a>
                    <a href="#"><i class="fab fa-instagram-square text-light p-2"></i></a>
                    </div>
                    
                    <h6 className="text-light"><Typical
                        loop={Infinity}
                        steps={[
                            "☎️ Contact : +8801822777360",
                            3000
                        ]}
                    /></h6>
                    <h6 className="text-light"><Typical
                        loop={Infinity}
                        steps={[
                            "📧 Email : Evanmasum188@gmail.com",
                            3000
                        ]}
                    /></h6>
                    <h6 className="text-light"><Typical
                        loop={Infinity}
                        steps={[
                            "🎯 Address : Daiyapara, 24no Ward, Uttar Agrabad, Chattogram",
                            3000
                        ]}
                    /></h6>
                </div>


                <form onSubmit={handleEmail}>
                <div className="col">
                        <input type="text" class="form-control my-3" id="name" placeholder="your name" name="name" required/>
                        <input type="text" class="form-control mb-3" id="subject" placeholder="Subject" name="subject" required/>
                        <input type="email" class="form-control mb-3" id="exampleFormControlInput1" placeholder="name@example.com" name="email" required/>
                        <textarea class="form-control mb-3" id="exampleFormControlTextarea1" placeholder="Text here" rows="3" name="message" required></textarea>
                        <input type="submit" className="btn btn-outline-light mb-3 w-100" value="Submit" />
                </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;