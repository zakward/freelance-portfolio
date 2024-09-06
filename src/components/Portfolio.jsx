import React, {useState} from 'react';
import Project from './Project';
import cocktail from "../images/cocktail.png"
import todoList from "../images/todoList.png"



function Portfolio() {
    const [projects, setProjects] = useState([
        {
            projectName: "Cocktail Connoisseur",
            description: "A front end react app that allows users to search for random or specific cocktails",
            skills: "React, Node.js, HTML, CSS, AXIOS, HTTP",
            liveLink: "https://www.zakward-cocktails.com/",
            githubLink: "https://github.com/zakward/cocktails",
            projectImg: cocktail
        },
        {
            projectName: "Axios ToDo List",
            description: "A vanilla javascript app that allows users to add, edit and delete todos from a list.",
            skills: "Vanilla JavaScript, HTML, CSS, AXIOS, HTTP",
            liveLink: "https://level2capstone.netlify.app/",
            githubLink: "https://github.com/zakward/level2capstone",
            projectImg: todoList

        },
        {
            projectName: "Meme Generator",
            description: "A react app using custom hooks that allows users to create, edit, and delete custom memes.",
            skills: "React, React-Router-Dom, Custom Hooks, CSS, JSX, AXIOS, HTTP",
            liveLink: "https://meme-generator-v-2.onrender.com",
            githubLink: "https://github.com/zakward/meme-generator-with-custom-hooks",
            projectImg: ""
        }
    ])

    const projectElements = projects.map(project => {
        return (
            <Project {...project}/>
        )
    })

console.log(projects)
    return ( 
        <div id = "portfolio-page">
            <h1>My Projects</h1>
            {projectElements}
        </div>
     );
}

export default Portfolio;