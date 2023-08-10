import React from "react";
import './plans.css';
import {plansData} from '../../../api/data/plansData'

const Plans = () => {
    return (
        <div className="plans-container">
            <div className="programs-header" style={{gap:'2rem'}}>
                <span className="stroke-text">ready to start</span>
                <span>your journey</span>
                <span className="stroke-text">now withus</span>
            </div>
            {/* plans card */}
            <div className="plans">
                {
                    plansData?.map((plan, i)=>(
                        <div className="plan" key={i}>
                            {plan.icon}
                            <span>{plan.name}</span>
                            <span>$ {plan.price}</span>
                            <div className="features">
                                {
                                    plan.features?.map((feature, i) => (
                                        <div className="feature">
                                            <img src="/assets/whiteTick.png" alt="" />
                                            <span key={i}>{feature}</span>
                                        </div>
                                    ))
                                }
                            </div>
                            <div>
                                <span>See more benefits &minus;&gt;</span>
                            </div>
                            <button className="btn">Join now</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Plans;