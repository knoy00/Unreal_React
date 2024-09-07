import React from 'react';
import './Hero.css';

function Hero() {
    return(
        <div className='hero'>
            <div className="hero_left">
                <div className="">
                    <h1>Make your <span>money</span><br /> move</h1>
                </div>
                <div>
                    <p>Send money across Ghana using our Unreal web app</p>
                </div>
                <div>
                  <h2> FAST ● SECURE ● AVAILABLE </h2>
                </div>

                <div className="hero_left_btn">
                    <div className="signUp_btn">
                        <button>Sign up</button>
                    </div>
                    <div className="learnMore_btn">
                        <button>Learn more</button>
                    </div>
                </div>
            </div>

            <div className="hero_right">
                <img src="/woman2.jpg" alt="" />
            </div>
        </div>
    )
}


export default Hero;