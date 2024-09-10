import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './Menu';


function Navbar() {


    const [isMobile, setIsMobile] = useState(false)

    function toggleMobile() {
        setIsMobile(!isMobile)
    }

    const navigate = useNavigate()

  

    console.log(isMobile)
    return (
        <>
            <nav>
                <MenuIcon id="iconBtn" sx={{ fontSize: "40px" }} onClick={toggleMobile} />
                <h1 id = "mobileh1">Zak Ward</h1>
                <div className="nav-div" style={{ width: "100vw", alignItems: "center", justifyContent: "space-around" }}>
                    <Link to="/"><button >About</button></Link>
                    <Link to="/portfolio"><button>Portfolio</button></Link>
                    <h1 style={{ fontSize: "2rem" }}>Zak Ward</h1>
                    <button><a className="social-link" href="https://github.com/zakward">Github</a></button>
                    <button><a className="social-link" href="https://www.linkedin.com/in/zakmward/">LinkedIn</a></button>
                </div>
            </nav>

            {isMobile && (
                <Menu isMobile = {isMobile} toggleMobile = {toggleMobile}/>
            )
            
            }
        </>
    );
}

export default Navbar;