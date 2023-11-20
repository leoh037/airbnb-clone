import grid from "../images/photo-grid.png"

function Hero() {
    return (
        <section className="hero">
            <div className="photo-container">
                <img src={grid} className="hero--photo" />
            </div>
            <div className="text-container">
                <h1 className="hero--header">Online Experiences</h1>
                <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
    )
}

export default Hero;