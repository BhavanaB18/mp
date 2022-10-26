import React from "react";
import { ReactDOM } from "react";
import logo from './img/logo.png';


function Header(){
    return(
        <div>
            <section id="header">
                <a href="#"><img src={logo} class="logo" alt="" /></a>
            

                <div>
                    <ul id="navbar">
                        <li><a  href= "index.html">Home</a></li>
                        <li><a href= "shop.html">Shop</a></li>
                        <li><a   href= "blog.html">Blog</a></li>
                        <li><a class="active" href= "about.html">About</a></li>
                        <li><a href= "contact.html">Contact</a></li>
                        <li id="lg-bag"><a href= "cart.html"><i class="fa fa-shopping-cart"></i></a></li>
                        <a href="#" id="close"><i class="far fa-times"></i></a>
                    </ul>
                </div>
                <div id="mobile">
                    <a href= "cart.html"><i class="fa fa-shopping-cart"></i></a>
                    <i id="bar" class="fas fa-outdent"></i>
                    
                </div>
            </section>
        </div>
    );
}

export default Header;