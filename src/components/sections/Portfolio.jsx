import data from "../../data/projects.json"
import "../style/Portfolio.css" 

export default function Portfolio(){
    return(
        <section id="portfolioSection" className="portfolio-section">
            <h1 className="portfolio-section-heading">My Portfolio</h1>
            <div className="portfolio-section-container">
                {data?.projects?.map((item,index) => (
                    <div key={index}className="portfolio-section-card">
                        <h3 className="portfolio-section-project-title">{item.title}</h3>
                        <div className="portfolio-section-card-img">
                            <img src={item.src} alt="placeholder" />
                        </div>
                        <div className="portfolio-section-card-tools"> 
                            {item.tools?.map((tool, toolIndex) => (
                                    <span key={toolIndex} className="portfolio-section-card-tool-block">
                                        {tool}
                                    </span>
                                ))}
                        </div>
                        <div className="portfolio-section-card-description">{item.description}</div>
                        <a className="portfolio-section-card-github-img" href={item.link}><img src='./github.png'/>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}