import React from 'react';
import linkedIn from "../images/linkedin.png"



function Form() {
    return ( 
        <form id = "contact-form">
            <p>Have a question or want to work together? Feel free to send me an email or connect with me on LinkedIn. I look forward to hearing from you!</p>

            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Email'/>
            <input type="text" placeholder='Subject' />
            <textarea name="" id="" placeholder='Message'></textarea>
            <button>SEND</button>
            <a href = "https://www.linkedin.com/in/zakmward/"><div className = "linkedIn-img">

            <img src= {linkedIn} alt="linkedIn" />
            </div></a>
        </form>
     );
}

export default Form;