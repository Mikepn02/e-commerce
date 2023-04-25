import React from "react";
import './App.css';
import images from './images.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);
function Landin() {
    return (
        <div className="container">
            <div className="navbar">
                <div className="logo"></div>
                <div className="bar">
                    <a href="landin.html">Home</a>
                    <a href="/About">AboutUs</a>
                    <div className="dropdown">
                        <a href="/">Product</a>
                        <div class="dropdown-content">
                            <a href="/">Living room furniture</a>
                            <a href="/Bedroom">Bedroom furniture</a>
                            <a href="/Dh">Dinning room furniture</a>
                        </div>
                    </div>
                    <a href="/">Contact</a><br /><br />
                    <input type="search" name="search" id="search" placeholder="searh by price or the name of the furniture you need" />
                    <a href="/">
                        <button className="details">
                            Login
                        </button>
                    </a>
                    <a href="/">
                        <button className="details">Get started &rarr;</button>
                    </a>

                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    <h1 id="text_1">Welcome to our MODERN FURNITURE DESIGN!</h1>
                    <p>CUSTOMIZE OUR FURNITURE<br />
                        We are here to satisfy your needs <br />
                        here we design your house with the best furniture from different places in the world

                    </p>
                    <button className="click"><a href="/">
                        <h4>Start now <span>&#10097; &#10097; &#11088;</span></h4>
                    </a></button>
                </div>
                <div className="col-2">
                    <img src={images.image42} alt="" />

                </div>
            </div>
            <div className="trend">
                <h1>Trending now <span>&#11088;&#11088;&#11088;</span></h1>
            </div>
            <div className="row">
                <div className="col-4">
                    <img src={images.image43} alt="" />
                    <p>$200.00</p>
                    <button className="btn">Add to cart &#x1F6D2;</button>
                </div>
                <div className="col-4">
                    <img src={images.image44} alt="" />
                    <p>$200.00</p>
                    <button className="btn">Add to cart &#x1F6D2;</button>
                </div>
                <div className="col-4">
                    <img src={images.image45} alt="" />
                    <p>$200.00</p>
                    <button className="btn">Add to cart &#x1F6D2;</button>
                </div>

                <button className="ex">Explore&#8594;</button>
                <div className="inputs">
                    <h1 id="h1disc">Get Discount Info:</h1>
                    <p>When you buy many on our site we give you discount!</p>
                    <input type="text" name="discount" id="discount" placeholder="Your email" /><button
                        id="sub">Subscribe</button>
                </div>
                <div className="row8">
                    <div className="col-5">
                        <div className="ship">&#128666;</div>
                        <h1>Free shipping</h1>
                        <p>Most of the time many product are made abroad <br/>
                            But actually sometimes requires shipping</p>
                    </div>
                    <div className="col-5">
                        <div>&#128179;</div>
                        <h1>Security payment</h1>
                        <p>You can pay using mobile phone and credit cards</p>
                    </div>
                    <div className="col-5">
                        <div>&#128197;</div>
                        <h1>1-Year guarantee</h1>
                    </div>
                </div>
            </div>
            <div className="footer">
<footer>
                <div className="footer-col">
                    <h4>Our product</h4>
                    <ul>
                        <li><a href="/">living room</a></li>
                        <li><a href="/">bedroom furniture</a></li>
                        <li><a href="/">dinning furniture</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Help</h4>
                    <ul>
                        <li><a href="/">FAQ</a></li>
                        <li><a href="/">shipping</a></li>
                        <li><a href="/">upload your product</a></li>
                        <li><a href="/">Discount</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Useful links</h4>
                    <ul>
                        <li><a href="/">about us</a></li>
                        <li id="contact">contact us</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>follow us</h4>

                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                    <FontAwesomeIcon icon={["fab", "facebook"]} />
                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    <FontAwesomeIcon icon={["fab", "youtube"]} />

                </div>
            </footer>
</div>
        </div>
    )
}
export default Landin