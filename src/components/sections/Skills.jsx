import data from "../../data/skills.json"

export default function Skills(){
    return(
        <section id="skillsSection" className="skills-section">
            <div className="skills-section-content-box">
                <h1 className="skills-seciton-heading">My technologies</h1>
                <div className="skills-section-container">
                    {data?.skills?.map((item,index) => (
                        <div key={index} className="skill-section-block"> 
                            <div className="skills-section-img">
                                <img src={item.src} alt="skill icon"/>    
                            </div>
                            <div className="skills-section-item-text">
                                <h6>{item.title}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}