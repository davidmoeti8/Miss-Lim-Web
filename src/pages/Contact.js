import React from 'react';
import ContactsImage from '../assets/forContacts.png';
import '../styles/Contact.css';

function Contact (){
    return (
        <div className="contact">
          <div className="leftSide"  style={{ backgroundImage: `url(${ContactsImage})` }}></div>
          <div className="rightSide">
            <h1>Contact us</h1>
            <form id="contact-info" method="POST">
                <label htmlFor="name">Full Name</label>
                <input name="name" placeholder="Enter full name..." type="text" />
                <label htmlFor="email">Email</label>
                <input name="email" placeholder="Enter email..." type="email" />
                <label htmlFor="message">Message</label>
                <textarea name="message" row="6" placeholder='Enter message' required></textarea>
                <button type='submit'>Send Message</button>
            </form>
          </div>
        </div>
    )
}

export default Contact