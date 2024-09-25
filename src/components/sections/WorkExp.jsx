import data from "../../data/workexp.json"
import '../style/WorkExp.css'

export default function WorkExp(){
    return(
        <section id="workExpSection" className="workexp-section">
            <div className="workexp-section-content-box">
                <h1 className="workexp-section-heading">Work Experience</h1>
                <div className="workexp-section-container">
                    {data?.workexp?.map((item,index) => (
                        <div key={index} className="workexp-section-card"> 
                            <div className="workexp-company-position-duration-box">
                                <div className="workexp-company-position-box">
                                    <h2 className="workexp-company-title"> {item.company} </h2>
                                    <h3 className="workexp-position-title"> {item.position} </h3>
                                </div>
                                <div className="workexp-duration-box">
                                    <h3 className="workexp-duration"> {item.start} - {item.end}</h3>    
                                </div>
                            </div>
                            <div className = "workexp-bullet-points-box">
                                {item.bulletPoints?.map((point, pointIndex) => (
                                    <div key={pointIndex} className="workexp-bullet-point">
                                        <span className="workexp-bullet-point-icon"> &#8226; </span>
                                        <span className="workexp-bullet-point-text"> {point} </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

}