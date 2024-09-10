import React from 'react';
import {Link, useNavigate} from "react-router-dom"


function Menu({toggleMobile, isMobile}) {
const navigate = useNavigate()

    function navigateAbout(){
        navigate("/")
        toggleMobile()
    }

    function navigatePortfolio(){
        navigate("/portfolio")
        toggleMobile()
    }
    return ( 
        <>
                <div className="nav-mobile" >
                    <button onClick = {navigateAbout}>About</button>
                    <button onClick = {navigatePortfolio}>Portfolio</button>
                    <button><a className="social-link" href="https://github.com/zakward">Github</a></button>
                    <button><a className="social-link" href="https://www.linkedin.com/in/zakmward/">LinkedIn</a></button>
                </div>
        </>
     );
}

export default Menu;