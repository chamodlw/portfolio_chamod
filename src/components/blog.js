import React from 'react';
import '../css/blog.css';
import img2 from '../images/postman-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'; 
import Footer from './footer';

const Blog = () => {
    return (
        <div>
            <div className="Blog">
                <h1 className="Blog-header">Postman</h1>
                <div className="card">
                    <div className="card-header">
                        <img src={img2} alt="Card" className="card-image" />
                    </div>
                    <div className="card-text">
                        <h4>Postman | Medium </h4>
                        <p>Postman is a collaboration platform for API development. Helps to backend development</p>
                        <p><a href="https://medium.com/@chamodweerasinghe8/postman-65768e82f9b4" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFileAlt} />Medium Article</a></p>
                        <p><a href="https://www.linkedin.com/posts/chamod-weerasinghe-b89aaa293_postman-activity-7198383671102365698-2Lq8?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn Post</a></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blog;