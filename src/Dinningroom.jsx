import React from "react";
import './App.css';
import images from './images.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);
function Dh(){
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
                <div className="col-1">
                    <h1>MODERN FURNITURE DESIGN</h1><br /> <br /> <br />
                    <h2>get in here , get out satisfied &#x1F602;</h2><br /><br /><br />
                    <p className="describe">Cheap wholesale condition waist line lingenerie halter production make us
                        sleeveless.cheap make up mannequin taset</p>
                    <p></p>
                    <button className="click"><a href="/">
                        <h4>Start now &#10097; &#10097; &#10097;</h4>
                    </a></button>
                </div>
                <div className="col-1">
                    <img src={images.image17} alt=""></img>
                    <h1>get our products on low price &#x0024;</h1>


                </div>
                <div className="title">
                    <h3>Living room Furniture</h3>
                </div>
                <div className="col-2">
                    <img src={images.image18} alt="" />
                    <p>$500</p>
                    <button className="btn">Add to cart &#x1F6D2;</button>
                </div>
                <div className="col-2">
                    <img src={images.image19} alt="" />
                    <p>$3000</p>
                    <button className="btn">Add to cart &#x1F6D2;</button>
                </div>
                <div className="col-2">
                    <img src={images.image20} alt="" />
                    <p>$5000</p>
                    <button className="btn">Add to cart &#x1F6D2;</button>
                </div>
                <div className="col-3">
                    <img src={images.image21} alt="" />
                    <p>$200.00</p>
                    <button className="btn">Add to cart &#x1F6D2;</button>
                </div>
                <div className="col-3">
                    <img src={images.image22} alt="" />
                    <p>$200.00</p>
                    <button className="btn">Add to cart &#x1F6D2;</button>
                </div>
                <div className="col-3">
                    <img src={images.image23} alt="" />
                    <p>$200.00</p>
                    <button className="btn">Add to cart &#x1F6D2;</button>
                </div>
                <div className="col-4">
                    <img src={images.image24} alt="" />
                    <p>$200.00</p>
                    <button className="btn">Add to cart &#x1F6D2;</button>
                </div>
                <div className="col-4">
                    <img src={images.image25} alt="" />
                    <p>$200.00</p>
                    <button className="btn">Add to cart &#x1F6D2;</button>
                </div>
                <div className="col-4">
                    <img src={images.image26} alt="" />
                    <p>$200.00</p>
                    <button className="btn">Add to cart &#x1F6D2;</button>
                </div>
                <div className="col-4">
                    <img src={images.image27} alt="" />
                    <p>$200.00</p>
                    <button className="btn">Add to cart &#x1F6D2;</button>
                </div>
                <div className="col-4">
                    <img src={images.image28} alt="" />
                    <p>$200.00</p>
                    <button className="btn">Add to cart &#x1F6D2;</button>
                </div>
                <div className="col-4">
                    <img src={images.image22} alt="" />
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
export default Dh