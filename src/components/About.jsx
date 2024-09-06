import React from 'react';
import profilePic from "../images/profilepic.png"


function About() {
    return (
        <div id="about-page">
            <div id="bio-container">
                <div id="bio">
                    <h1>About Me</h1>
                    My greatest passion is helping others.  Through my time as a professional firefighter, Army officer, business-owner, and most recently Web Development Sr. Instructor, I developed and honed in on my talents of leadership, loyalty, and teamwork.  Web Development allows me to use my high attention for detail and creativity to help build innovative and pertinent web applications.  My goal is to use my leadership skills and my passion for education and coding to help others realize and reach their potential in tech and build a successful career that supports my family.
                </div>
                <img id="about-img" alt="bio-pic" src={profilePic} />
            </div>
            <ul id="skills-list">
                <li>JavaScript</li>
                <li>React</li>
                <li>Express</li>
                <li>Mongoose</li>
                <li>MongoDB</li>
                <li>AJAX/HTTP</li>
                <li>Node.js</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JSON</li>
                <li>Git</li>
            </ul>
            <div id="experience-container">
                <h2>Professional Experience</h2>
                <h2>VSCHOOL</h2>
                <ul>
                    <li>
                        <strong>Curriculum Development and Instruction:</strong> Created and taught full stack development modules, focusing on user authentication with bcrypt, express-jwt, and jsonwebtoken. Kept all materials up-to-date with industry standards.
                    </li>
                    <li>
                        <strong>Student Mentorship and Engagement:</strong> Mentored around 0 students through weekly workshops and one-on-one sessions, simplifying complex concepts to make them more accessible.
                    </li>
                    <li>
                        <strong>Leadership and Supervision:</strong> Managed and trained a team of 3 Instructors, 10 Teaching Assistants, overseeing the Teaching Assistant Program and ensuring alignment with program goals.
                    </li>
                    <li>
                        <strong>Program Enhancement:</strong> Developed new roles and implemented changes to boost efficiency and improve the learning experience for both staff and students.
                    </li>
                    <li>
                        <strong>Feedback and Improvement:</strong> Regularly gathered and applied student feedback to refine teaching methods. Recognized for leadership and dedication to student success.
                    </li>
                </ul>
                <h2>SIGNAL OFFICER, US ARMY</h2>
                <ul> 
                    <li>Led communication and IT operations for 250 personnel across 5 Department of Army installations, advising the Battalion Commander on all communications, information security, and network management matters.</li> 
                    <li>Supervised the installation, maintenance, and troubleshooting of unit communications systems, including over 200 government devices, DSN phones, and classified/unclassified networks.</li> 
                    <li>Managed knowledge systems, ensuring file sharing, backup capabilities, and domain access for all Battalion users.</li> 
                    <li>Oversaw tactical communication systems valued at $17.4 million during six signal support missions, both CONUS and OCONUS.</li> 
                    <li>Directed the Battalion Helpdesk, providing automation services and resolving IT issues to ensure operational continuity.</li> 
                    </ul>

            </div>

        </div>

    );
}

export default About;