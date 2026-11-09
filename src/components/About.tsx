import { portfolio } from '../data/portfolio'

function About() {
  return (
    <section className="content-section" id="about">
      <div className="section-shell">
        <div className="about-grid">
          <div>
            <div className="section-heading">
              <p className="eyebrow">A little about me</p>
              <h2>Curiosity is where good work begins.</h2>
            </div>
            <div className="about-copy">
              {portfolio.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <aside className="about-note">
            <strong>What I’m about</strong>
            <p>
              Staying curious, learning continuously, and making ideas easier
              to use.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default About
