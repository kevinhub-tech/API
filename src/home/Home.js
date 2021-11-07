import React, { Component } from 'react';
import './Home.css';
import home from '../img/home.jpg';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                  <img class="home-banner" src={home} alt="Nature"></img>
                    <div className="homeinner-container">  
                    <h1>KNOW YOUR NEIGHBOURHOOD</h1>
                        
                    </div>
                  
            </div>
        )
    }
}

export default Home;