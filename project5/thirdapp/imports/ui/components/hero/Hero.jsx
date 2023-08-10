import React from "react";
import './hero.css'
import Header from "../header/Header";

const Hero = () => {
    return(
        <div className="hero">
           <div className="left-h">
             <Header />
            {/* the best ad   */}
             <div className="the-best-ad">
                <div></div>
                <span>The best fitness club in the town</span>
             </div>
             {/* hero heading */}
             <div className="hero-text">
                <div>
                    <span className="stroke-text">Shape</span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
               <div>
                <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                </div> 
             </div>
             <div className="figures">
                <div>
                    <span>+140</span>
                    <span>export coachs</span>
                </div>
                <div>
                    <span>+978</span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>fitness programs</span>
                </div>
             </div>
             {/* hero button */}
             <div className="hero-button">
                <button className="btn">Get Started</button>
                <button className="btn">Learn More</button>
             </div>
           </div>

           <div className="right-h">
            <button className="btn">Join Now</button>
            <div className="heart-rate">
                <img src="/assets/heart.png" alt="" />
                <span>Heart Rate</span><span>Bpm</span>
            </div>
            {/* hero images */}
            <img src="/assets/hero_image.png" alt="" className="hero-image"/>
            <img src="/assets/hero_image_back.png" alt="" className="hero-image-back"/>

         <div className="calories">
            <img src="/assets/calories.png" alt="" />
            <div>
                <span>Calories Burned</span>
                <span>20 kilo</span>
            </div>
         </div>
            
         </div>


        </div>
    )
}

export default Hero