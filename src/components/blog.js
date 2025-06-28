import React from 'react';
import '../css/blog.css';
import img1 from '../images/postman-1.jpg';
import img2 from '../images/autoroute.png';
import img3 from '../images/shimmer.png';
import img4 from '../images/curved_nav_bar.png';
import img5 from '../images/riverpod.png';
import img6 from '../images/local_notifications.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'; 

const Blog = () => {
    const blogData = [
        {
            title: "Postman",
            subtitle: "Postman | Medium",
            description: "Postman is a collaboration platform for API development. Helps to backend development",
            image: img1,
            mediumUrl: "https://medium.com/@chamodweerasinghe8/postman-65768e82f9b4",
            linkedinUrl: "https://www.linkedin.com/posts/chamod-weerasinghe-b89aaa293_postman-activity-7198383671102365698-2Lq8?utm_source=share&utm_medium=member_desktop",
        },
        {
            title: "Flutter - Auto Route",
            subtitle: "Auto Route in Flutter | Medium",
            description: "Auto Route is a powerful routing library for Flutter that simplifies navigation and route management. It allows developers to define routes in a declarative way, making it easier to manage complex navigation flows.",
            image: img2,
            mediumUrl: "https://medium.com/@chamodweerasinghe8/flutter-autoroute-df86d3800e22",
            linkedinUrl: "https://www.linkedin.com/posts/chamod-weerasinghe-b89aaa293_flutterautoroute-activity-7296540889470943232-YYx2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcs3BkBt6ryihdKipJvNUHgntmMPuD0MWQ",
        },
        {
            title: "Flutter - Shimmer",
            subtitle: "Shimmer Effect in Flutter | Medium",
            description: "Shimmer effect is a loading animation in Flutter. It enhances user experience by providing visual feedback during data loading.",
            image: img3,
            mediumUrl: "https://medium.com/@chamodweerasinghe8/flutter-shimmer-684c6f7006f8",
            linkedinUrl: "https://www.linkedin.com/posts/chamod-weerasinghe-b89aaa293_fluttershimmer-activity-7302317071915171840-nsHq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcs3BkBt6ryihdKipJvNUHgntmMPuD0MWQ",
        },
        {
            title: "Flutter - Curved Navigation Bar",
            subtitle: "Curved Navigation Bar in Flutter | Medium",
            description: "Easy way to develop user friendly bottom navigation bar just using curved navigation bar plugin.",
            image: img4,
            mediumUrl: "https://medium.com/@chamodweerasinghe8/flutter-curved-navigation-bar-e6687cdefab3",
            linkedinUrl: "https://www.linkedin.com/posts/chamod-weerasinghe-b89aaa293_fluttercurved-navigation-bar-activity-7311833874110550016-2_3H?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcs3BkBt6ryihdKipJvNUHgntmMPuD0MWQ",
        },
        {
            title: "Flutter - Riverpod",
            subtitle: "State Management with Riverpod in Flutter | Medium",
            description: "Riverpod is a modern state management solution for Flutter that provides a simple and efficient way to manage application state. It allows developers to create reactive and composable state management solutions, making it easier to build scalable and maintainable applications.",
            image: img5,
            mediumUrl: "https://medium.com/@chamodweerasinghe8/flutter-state-management-with-riverpod-324dfb154646",
            linkedinUrl: "https://www.linkedin.com/posts/chamod-weerasinghe-b89aaa293_flutterstate-management-with-riverpod-activity-7320131322486628352-eB9-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcs3BkBt6ryihdKipJvNUHgntmMPuD0MWQ",
        },
        {
            title: "Flutter - Local Notifications",
            subtitle: "Local Notifications in Flutter notification handling | Medium",
            description: "Local notifications in Flutter allow developers to schedule and display notifications within the app. This feature enhances user engagement by providing timely updates and reminders.",
            image: img6,
            mediumUrl: "https://medium.com/@chamodweerasinghe8/flutter-local-notifications-6d4246186c2d",
            linkedinUrl: "https://www.linkedin.com/posts/chamod-weerasinghe-b89aaa293_flutterlocal-notifications-activity-7343957474732908544-BkoF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcs3BkBt6ryihdKipJvNUHgntmMPuD0MWQ",
        },
    ];

    return (
        <div className="Blog-container">
            {blogData.map((blog, index) => (
                <div className="Blog" key={index}>
                    <h1 className="Blog-header">{blog.title}</h1>
                    <div className="card">
                        <div className="card-header">
                            <img src={blog.image} alt="Card" className="card-image" />
                        </div>
                        <div className="card-text">
                            <h4>{blog.subtitle}</h4>
                            <p>{blog.description}</p>
                            <p>
                                <a href={blog.mediumUrl} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFileAlt} /> Medium Article
                                </a>
                            </p>
                            <p>
                                <a href={blog.linkedinUrl} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn Post
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Blog;
