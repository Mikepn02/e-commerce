import React from "react";
import './App.css';
import images from './images.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);
function BedRoom(){
   return(
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
                <div className="titlek">
                    <h3>Bedroom Furniture</h3>
                </div>
                <div className="col-9">
                    <img src={images.image30} alt=""/>
                    <p>$500</p>
                    <button className="btn">Add to cart &#x1F6D2;</button>
                </div>
                <div className="col-9">
                <img src={images.image31} alt=""/>
                    <p>$3000</p>
                    <button className="btn">Add to cart &#x1F6D2;</button>
                </div>
                <div className="col-9">
                <img src={images.image32} alt=""/>

                    <p>$5000</p>
                    <button className="btn">Add to cart &#x1F6D2;</button>
                </div>
                <div className="col-10">
                <img src={images.image33} alt=""/>
                    <p>$200.00</p>
                    <button className="btn">Add to cart &#x1F6D2;</button>
                </div>
                <div className="col-10">
                <img src={images.image34} alt=""/>
                    <p>$200.00</p>
                    <button className="btn">Add to cart &#x1F6D2;</button>
                </div>

                <div className="col-11">
                <img src={images.image35} alt=""/>
                    <p>$200.00</p>
                    <button className="btn">Add to cart &#x1F6D2;</button>
                </div>
                <div className="col-4">
                <img src={images.image36} alt=""/>
                    <p>$200.00</p>
                    <button className="btn">Add to cart &#x1F6D2;</button>
                </div>
                <div className="col-4">
                <img src={images.image37} alt=""/>
                    <p>$200.00</p>
                    <button className="btn">Add to cart &#x1F6D2;</button>
                </div>
                <div className="col-4">
                <img src={images.image38} alt=""/>
                    <p>$200.00</p>
                    <button className="btn">Add to cart &#x1F6D2;</button>
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
export default BedRoom