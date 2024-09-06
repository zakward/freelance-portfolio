import React from 'react';
import {Link} from "react-router-dom"


function Navbar() {
    return (
        <>
            <nav>
                <Link to = "/"><button>About</button></Link>
                <Link to = "/portfolio"><button>Portfolio</button></Link>
                <h1 style = {{fontSize: "2rem"}}>Zak Ward</h1>
                <Link to ="contact"><button>Contact</button></Link>
                <button><a className = "social-link"href="https://github.com/zakward">Github</a></button> 
                <button><a className = "social-link" href = "https://www.linkedin.com/in/zakmward/">LinkedIn</a></button>
            </nav>
        </>
     );
}

export default Navbar;