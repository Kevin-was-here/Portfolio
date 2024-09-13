import data from "../../data/projects.json"
import "../style/Portfolio.css" 

export default function Portfolio(){
    return(
        <section id="portfolioSection" className="portfolio-section">
            <h1 className="portfolio-section-heading">My Portfolio</h1>
            
            <div className="portfolio-section-container">
                {data?.projects?.map((item,index) => (
                    <div key={index} className="portfolio-section-card">
                        <div className="portfolio-section-img">
                            <img src={item.src} alt="placeholder" />
                        </div>
                        <div className="portfolio-section-card-content">
                            <div>
                                <h3 className="portfolio-section-title">{item.title}</h3>
                                <p className="text-md">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </section>
    )
}