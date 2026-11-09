import { ArrowDown, ArrowRight } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import SocialMark from './SocialMark'

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-shell">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            {portfolio.role}
          </p>
          <h1 id="hero-title">{portfolio.name}</h1>
          <p className="hero-statement">{portfolio.headline}</p>
          <p className="hero-summary">{portfolio.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={portfolio.resumeUrl} download>
              <ArrowDown size={16} aria-hidden="true" />
              Download résumé
            </a>
            <a className="button button-secondary" href="#projects">
              View projects <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a className="text-link" href="#contact">
              Contact me
            </a>
          </div>
          <div className="hero-socials" aria-label="Professional profiles">
            {portfolio.linkedinUrl && (
              <a href={portfolio.linkedinUrl} target="_blank" rel="noreferrer">
                <SocialMark network="linkedin" />
                LinkedIn
              </a>
            )}
            {portfolio.githubUrl && (
              <a href={portfolio.githubUrl} target="_blank" rel="noreferrer">
                <SocialMark network="github" />
                GitHub
              </a>
            )}
          </div>
        </div>
        <aside className="hero-aside" aria-label="Career highlights">
          <div className="hero-aside-top">
            <span className="aside-index">01 / PROFILE</span>
            <span className="aside-mark" aria-hidden="true">GMJ</span>
          </div>
          <p className="hero-years">8.9<span>+</span></p>
          <p className="hero-years-label">years building enterprise software</p>
          <div className="aside-divider" />
          <dl className="focus-list">
            <div>
              <dt>Domains</dt>
              <dd>Banking · Healthcare · Content management</dd>
            </div>
            <div>
              <dt>Engineering</dt>
              <dd>Java · Microservices · Cloud architecture</dd>
            </div>
            <div>
              <dt>Exploring</dt>
              <dd>Python · AI · RAG</dd>
            </div>
          </dl>
          <span className="hero-orbit orbit-one" aria-hidden="true" />
          <span className="hero-orbit orbit-two" aria-hidden="true" />
        </aside>
      </div>
      <a className="scroll-cue" href="#about">
        <span>Scroll to explore</span>
        <span className="scroll-line" aria-hidden="true" />
      </a>
    </section>
  )
}

export default Hero
