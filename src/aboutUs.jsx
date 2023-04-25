import React from "react";
import './App.css'
import images from './images'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

function  About(){
    return(
        <div className="container">
              <div className="navbar">
        <div className="logo"></div>
        <div className="bar">
            <a href="landin.html">Home</a>
            <a href="About us.html">AboutUs</a>
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
        <div class="row1">
      <div class="col-6">
        <h1>About <span id="shop"> The shop</span></h1>
        <p>
          Get in our furniture shop , we change you and make sure your are
          satisfied
        </p>
        <p>
          Vintage urban runway orginal bodice embroidery modification.<br />
          Shape fashion jumper experiment luxirious runway imagnation
          necessity independent pret porter availability kind pattern
        </p>
      </div>
      <div className="col-6">
        <img src={images.image40} alt="" />
      </div>
    </div>
    <div className="row2">
      <div className="col-7">
        <h1 id="color">657+</h1>
        <p>Project complete</p>
      </div>
      <div className="col-7">
        <h1 id="color">700+</h1>
        <p>client world wide</p>
      </div>
      <div className="col-7">
        <h1 id="color">800+</h1>
        <p>client reviews</p>
      </div>
    </div>
    <div className="row3">
      <div className="col-4">
        <h1>What our <span id="color">customer say:</span></h1>
        <br /><br />
        <img src={images.image41} alt="" />
      </div>
      <div className="col-4">
        <p>
          <span className="color">&ldquo;</span> <br />
          My names are Eric nam a proffessor in MIT university of united
          states am permanent customer for Modern furniture design. <br />
          " Actually furniture is important in our life? We know that we need
          furniture for our comfortable lives, <br />
          for storage, sitting on and, for relaxation.<br />
          Buying furniture without being planned, affects your decoration and
          overwhelming the space.<br />
          Choosing the right one for your home or office not only improves
          overall beauty but keeps your stress away as well"
        </p>
        <br /><br />
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
export default About