import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight">Mohamad Alnass</span></h1>
          <p className="hero-subtitle">
            A computer engineer with a passion for building software/electronics solutions
          </p>
          <p className="hero-description">
            Welcome to my portfolio. Here you'll find a collection of projects 
            that showcase my skills in web development, design, and problem-solving.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
