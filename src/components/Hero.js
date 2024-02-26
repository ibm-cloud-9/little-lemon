import './Default.css'
import './Hero.css'

function Hero() {

    return (
        <>
        <article className="hero-container">
            <div className="hero-box hero-box-overlay">
                <h1 className="hero-title">Little Lemon</h1>
                <h2 className="hero-subtitle">Chicago</h2>
                <p className="hero-block">We are a family owned Mediterranean restaurant, docused on traditional receipes served with a modern twist.</p>
                <p><img className="hero-floating-image" src="restaurant-food.jpg" alt="restaurant food picture"/>
                </p>
                <button className="default-button hero-left">Reserve a Table</button>
            </div>
        </article>
        </>
    )
}

export default Hero;