import React from "react";
import { ReactDOM } from "react";
import Header from "./header";
import a6 from './img/about/a6.jpg';
import f1 from './img/features/f1.png';
import f2 from './img/features/f2.png';
import f3 from './img/features/f3.png';
import f4 from './img/features/f4.png';
import f5 from './img/features/f5.png';
import f6 from './img/features/f6.png';




function About(){
    return(
        <div>


            <section class="about-header">
            
                <h2>#Know us</h2>
                <p>To know More about us</p>
            
            </section>

            <section id="about-head" class="section-p1">
                <img src={a6} alt=""/>
                <div>
                    <h2>Who We Are?</h2>
                    <p>A simple paragraph A simple paragraph A simple paragraph A simple paragraph A simple paragraph A simple paragraph A simple paragraph A simple paragraph A simple paragraph A simple paragraph A simple paragraph A simple paragraph A simple paragraph A simple paragraph A simple paragraph A simple paragraph
                        A simple paragraphA simple paragraph A simple paragraph A simple paragraph A simple paragraph A simple paragraph A simple paragraph A simple paragraph A simple paragraph A simple paragraph A simple paragraph A simple paragraph A simple paragraph A simple paragraph A simple paragraph A simple paragraph
                    </p>
                    <abbr title="">Create stunning images with as much or as little control as you like thanks to a choice of Basic and Creative modes</abbr>
                    
                    <marquee bgcolor="#ccc" loop = "-1" scrollamount="5" width="100%">
                        Create stunning images with as much or as little control as you like thanks to a choice of Basic and Creative modes
                    </marquee>
                </div>
            </section>

        <section id="about-app" class = "section-p1">
            <h1>
                Download Our <a herf="#">App</a>
            </h1>
            <div class="video">
                <video autoplay muted loop src="img/about/1.mp4"></video>

            </div>
        </section>

        <section id="feature" class="section-p1">
            <div class="fe-box">
                <img src={f1} alt="" />
                <h6>Free Shipping</h6>     
            </div>
            <div class="fe-box">
                <img src={f2} alt="" />
                <h6>Online Order</h6>     
            </div>
            <div class="fe-box">
                <img src={f3} alt="" />
                <h6>Save Money</h6>     
            </div>
            <div class="fe-box">
                <img src={f4} alt="" />
                <h6>Promotions</h6>     
            </div>
            <div class="fe-box">
                <img src={f5} alt="" />
                <h6>Happy Sell</h6>     
            </div>
            <div class="fe-box">
                <img src={f6} alt="" />
                <h6>24/7 Support</h6>     
            </div>
        </section>

        <section id="newsletter" class="section-p1 section-m1">
            <div class="newstext">
                <h4>Sign up For NewsLetters</h4>
                <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
            </div>
            <div class="form">
                <input type="text" placeholder="Your email addresss" /> 
                <button class="normal">Sign Up</button>
            </div>
        </section>

        
    </div>
    );
}

export default About;