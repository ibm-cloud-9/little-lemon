import './About.css';
import Footer from './Footer';

function About() {
    return (
        <>

        <article className="about-container">
            <div className="about-box about-box-overlay">
                <h1 className="about-title">Little Lemon</h1>
                <h2 className="about-subtitle">Chicago</h2>
                <p className="about-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p><img className="about-floating-image" src="mario-and-adrian-b.jpg" alt="mario and adrian photo b"/>
                </p>
                <p><img className="about-floating-image-top"src="mario-and-adrian-a.jpg" alt="mario and adrian photo a"/></p>

            </div>
        </article>

        <article>
            <div className="about-white-space"></div>
        </article>

        <Footer />
        </>
    )
}

export default About;