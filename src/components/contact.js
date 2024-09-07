import React from 'react';
import '../css/contact.css';
import Footer from './footer';
import ContactForm from './contact-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Import from the brands package

const Contact = () => {

    const handleWhatsappClick = () => {
        window.open('https://wa.me/+94762619592', '_blank');
    }

    const handleEmailClick = () => {
        window.location.href = 'mailto:chamodweerasinghe8@gmail.com';
    }

    const text = "Shaping the web, one pixel at a time. Let's connect and create something extraordinary!";

    // Split text into an array with periods followed by a placeholder for <br>
    const textArray = text.split('.').reduce((acc, part, index) => {
        acc.push(part);
        if (index < text.split('.').length - 1) {
            acc.push(<br key={`break-${index}`} />); // Insert <br> after each period
        }
        return acc;
    }, []);

    return (
        <div>
            <div className="contact">
                <div className="contact-header">
                    <h1>
                        {textArray.map((item, index) =>
                            typeof item === 'string' ? (
                                item.split("").map((letter, letterIndex) => (
                                    <span key={`${index}-${letterIndex}`} style={{ '--index': letterIndex }}>
                                        {letter === " " ? "\u00A0" : letter} {/* Handles spaces */}
                                    </span>
                                ))
                            ) : (
                                item // Render <br> elements
                            )
                        )}
                    </h1>
                </div>
                <div className="contact-body">
                    <div className='contact-form'>
                        <ContactForm />
                    </div>
                    <div className='contact-info'>
                        <div className='contact-info-header'>
                            <h1>Contact me</h1>
                        </div>
                        <div className='contact-info-body'>
                            <div className='contact-info-item'>
                                <FontAwesomeIcon icon={faPhone} />
                                <span>+94762619592</span> {/* Replace with your phone number */}
                            </div>
                            <div className='contact-info-item'>
                                <FontAwesomeIcon icon={faEnvelope} onClick={handleEmailClick}/>
                                <span>chamodweerasinghe8@gmail.com</span> {/* Replace with your email */}
                            </div>
                            <div className='contact-info-item'>
                                <FontAwesomeIcon icon={faWhatsapp} onClick={handleWhatsappClick} />
                                <span>+94762619592</span> {/* Replace with your WhatsApp number */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;
