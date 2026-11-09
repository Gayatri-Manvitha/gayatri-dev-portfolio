import { portfolio } from '../data/portfolio'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-shell">
        <div className="hero-copy">
          <p className="eyebrow">{portfolio.role}</p>
          <h1>
            Hello, I’m <span>{portfolio.name}.</span>
          </h1>
          <p className="hero-summary">{portfolio.intro}</p>
          <div className="hero-actions">
            <a className="button" href="#projects">
              Explore my work
            </a>
            <a className="button button-secondary" href="#contact">
              Say hello
            </a>
            {portfolio.resumeUrl && (
              <a
                className="button button-secondary"
                href={portfolio.resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                View resume
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
