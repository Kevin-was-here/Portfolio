import '../style/HeroSection.css'

export default function HeroSection(){
    return (
        <section id='heroSection' className="hero-section">
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <h2 className="hero-section-title">Hi I'm Kevin</h2>
                    <h1 className="hero-section-title-color"> Database Engineer</h1>
                    <h1 className="hero-section-secondary-title-color"> Software Developer </h1>
                    <p className="hero-section-description">To be creative, to build things, to have fun.</p>
                </div>
                <div className="hero-section-socials">
                    <a href='https://mail.google.com/mail/u/0/?fs=1&to=xuyang4@ualberta.ca&tf=cm' target="_blank"> 
                        <img src="./gmail.png" alt="gmail"/>
                    </a>
                    <a href='https://www.linkedin.com/in/xuyang-huang/' target="_blank">
                        <img src="./linkedin.png" alt="linkedin" />
                    </a>
                    <a href='https://github.com/Kevin-was-here' target="_blank">
                        <img src="./github.png" alt="github" />
                    </a>
                </div>
            </div>
            <div className="hero-section-image">
                <img src='./avatar.jpg' alt="hero section"/>    
            </div>
        </section>
    );
}