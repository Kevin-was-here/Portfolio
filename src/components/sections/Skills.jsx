import data from "../../data/skills.json"
import '../style/Skill.css'

export default function Skills(){
    return(
        <section id="skillsSection" className="skills-section">
            <div className="skills-section-content-box">
                <h1 className="skills-section-heading">My technologies</h1>
                <div className="skills-section-container">
                    {data?.skills?.map((item,index) => (
                        <div key={index} className="skill-section-block"> 
                            <img src={item.src} alt="skill icon"/>
                            <h6 className="skills-section-item-text">{item.title}</h6>    
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}