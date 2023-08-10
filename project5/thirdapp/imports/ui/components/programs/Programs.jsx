import React from "react";
import './programs.css';
import { programsData } from '../../../api/data/programsData'
const Programs = () => {
    return(
        <div className="Program" id="program">
         {/* header */}
         <div className="programs-header">
            <span className="stroke-text">Explore our</span>
            <span>Program</span>
            <span className="stroke-text">to shape you</span>
         </div>
         <div className="program-categories">
         { programsData?.map((program, index) => (
             <div className="categories" key={index}>
             {program.image}
            <span>{program.heading}</span><span>{program.details}</span>
            <div className="join-now">
            <span>
                Join Now
            </span>
            <img src="/assets/rightArrow.png" alt="rightarrow" />
         </div>
        </div>
  
        
         ))}
         </div>
        
        </div>
    )
}

export default Programs