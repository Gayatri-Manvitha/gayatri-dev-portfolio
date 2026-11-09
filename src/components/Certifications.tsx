import { Award, GraduationCap } from 'lucide-react'
import { portfolio } from '../data/portfolio'

function Certifications() {
  return (
    <section className="content-section section-soft" id="certifications" aria-labelledby="certifications-title">
      <div className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">06 — Credentials</p>
          <h2 id="certifications-title">Learning, applied.</h2>
        </div>
        <div className="credential-grid">
          <div>
            <h3 className="subsection-title"><Award size={18} aria-hidden="true" /> Certifications</h3>
            {portfolio.certifications.map((item) => (
              <article className="credential-card" key={item.title}>
                <span className="credential-icon"><Award size={19} aria-hidden="true" /></span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.organization}</p>
                  <p className="credential-description">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div>
            <h3 className="subsection-title"><GraduationCap size={19} aria-hidden="true" /> Education</h3>
            {portfolio.education.map((item) => (
              <article className="credential-card" key={item.title}>
                <span className="credential-icon"><GraduationCap size={20} aria-hidden="true" /></span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.organization}</p>
                  <p className="credential-description">{item.period} · {item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
