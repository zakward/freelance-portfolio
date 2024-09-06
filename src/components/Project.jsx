import React from 'react';

function Project({projectName, description, skills, liveLink, githubLink, projectImg}) {
    return ( 
        <div id = "project-container">
            <h1>{projectName}</h1>
            <img id = "project-img" src = {projectImg}/>
            <p>{description}</p>
            <p>{skills}</p>
            <a className = "project-links" href={githubLink}><h2>GITHUB REPO</h2></a>
            <a className = "project-links" href={liveLink}><h2>LIVE SITE</h2></a>
        </div>
     );
}

export default Project;