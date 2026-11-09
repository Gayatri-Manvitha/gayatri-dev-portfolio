import { ArrowUpRight, Mail } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import SocialMark from './SocialMark'

function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-shell contact-layout">
        <div>
          <p className="eyebrow">07 — Contact</p>
          <h2 id="contact-title">Let’s build something meaningful.</h2>
          <p className="section-intro">
            I'm always interested in connecting with engineers, architects and technology enthusiasts who are passionate about building scalable systems and exploring emerging technologies.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button button-primary" href={`mailto:${portfolio.email}`}>
            <Mail size={17} aria-hidden="true" />
            Get in touch <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <div className="contact-links">
            <a href={`mailto:${portfolio.email}`}>{portfolio.email}</a>
            {portfolio.linkedinUrl && (
              <a href={portfolio.linkedinUrl} target="_blank" rel="noreferrer">
                <SocialMark network="linkedin" /> LinkedIn
              </a>
            )}
            {portfolio.githubUrl && (
              <a href={portfolio.githubUrl} target="_blank" rel="noreferrer">
                <SocialMark network="github" /> GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
