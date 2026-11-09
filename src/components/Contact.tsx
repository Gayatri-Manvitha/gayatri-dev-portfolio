import { portfolio } from '../data/portfolio'

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-shell contact-layout">
        <div className="section-heading">
          <p className="eyebrow">Let’s connect</p>
          <h2>Have an idea or opportunity?</h2>
          <p className="section-intro">
            I’d love to hear from you. Feel free to get in touch.
          </p>
        </div>
        <div className="hero-actions">
          {portfolio.email && (
            <a className="button" href={`mailto:${portfolio.email}`}>
              Email me
            </a>
          )}
          {portfolio.phone && (
            <a className="button button-secondary" href={`tel:${portfolio.phone}`}>
              Call me
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
