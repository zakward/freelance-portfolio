import React, {useState} from 'react';
import {Link} from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';


function Navbar() {


    const [isMobile, setIsMobile] = useState(false)

    function toggleMobile(){
        setIsMobile(!isMobile)
    }

    return (
        <> 
            <nav>  
                        <MenuIcon  id = "iconBtn" sx = {{fontSize: "40px"}} onClick = {toggleMobile}/>
                   
                    <div className = "nav-div"style = {{width: "100vw", alignItems: "center", justifyContent: "space-around"}}>
                <Link to = "/"><button>About</button></Link>
                <Link to = "/portfolio"><button>Portfolio</button></Link>
                <h1 style = {{fontSize: "2rem"}}>Zak Ward</h1>
                <button><a className = "social-link"href="https://github.com/zakward">Github</a></button> 
                <button><a className = "social-link" href = "https://www.linkedin.com/in/zakmward/">LinkedIn</a></button>
                </div>       
            </nav>
        </>
     );
}

export default Navbar;