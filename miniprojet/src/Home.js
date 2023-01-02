import React from 'react';
import './home.css';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <>
            <nav className="navbar">
                <div className="max-width">
                    <div className="logo"><Link to='/'>Home<span>Page.</span></Link></div>
                    <ul className="menu">
                        <li><Link className="App-link" to='/' rel="noopener noreferrer">Home</Link></li>
                        <li><Link className="App-link" to='/Contacts' rel="noopener noreferrer">Contacts</Link></li>
                        <li><Link className="App-link" to='/Blog' rel="noopener noreferrer">blog</Link></li>
                    </ul>
                    <div className="menu-btn">
                        <ion-icon name="list-outline"></ion-icon>
                    </div>
                </div>
            </nav>

            <div className="home" id="home">
                <div className="max-width">
                    <div className="home-content">
                        <div className="text-3"> We are : <span className="typing"></span></div>
                        <div className="text-2">Welcome to Our Homepage</div>
                        <p className="text-4">
                            You can browse our page with the <Link className="App-link" to='/Contacts' rel="noopener noreferrer">Contacts</Link> or <Link className="App-link" to='/Blog' rel="noopener noreferrer">blog</Link> links
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;