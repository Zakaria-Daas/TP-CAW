import React, {useState} from 'react';
import {Link, Outlet} from 'react-router-dom';
import './contacts.css';

const Contacts = () => {
    return (
        <header className="Contact-header">
            <nav className="navbar1">
                <div className="max-width">
                    <div className="logo"><Link to='/Contacts'>Contact <span>Page.</span></Link></div>
                    <ul className="menu1">
                        <li><Link className="App-link" to='/' rel="noopener noreferrer">Home</Link></li>
                        <li><Link className="App-link" to='/Contacts' rel="noopener noreferrer">Contacts</Link></li>
                        <li><Link className="App-link" to='/Blog' rel="noopener noreferrer">Blog</Link></li>
                    </ul>
                    <div className="menu-btn">
                        <ion-icon name="list-outline"></ion-icon>
                    </div>
                </div>
            </nav>


            <div className="contact" id="contact">
                <div className="max-width">
                    <h1 className="title">Contacts</h1>
                    <div className="contact-content">
                        <div className="column left">
                            <div className="taxt"></div> 
                            <Link to='List'><button className="button">Display Contacts</button></Link>
                            <Link to='Create'><button className="button">Create Contact</button></Link>
                            <Outlet />
                        </div>
                    </div>
                </div>
                <footer>
                    <span >Created By <span style={{color: '#E91E63'}}>Professionals</span> |<span><ion-icon name="earth-outline"></ion-icon></span> 2023 All Rights Reserved</span>
                </footer>
            </div>
         
        </header>
    )
}

export default Contacts;