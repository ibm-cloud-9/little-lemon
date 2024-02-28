import Footer from "./Footer";
import './Default.css';
import './Hero.css'
;
function MainMenu() {
    return (
        <>
        <article className="hero-container">
            <div className="hero-box hero-box-overlay">
                <h1 className="hero-title">Welcome to the Main Menu</h1>
                <h2 className="hero-subtitle"></h2>
                <p className="hero-block">This was not a required implementation</p>
            </div>
        </article>        
        <Footer />
        </>
    )
}

export default MainMenu;