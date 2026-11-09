import { ArrowUpRight, Award, Building2, Cloud } from 'lucide-react'
import { portfolio } from '../data/portfolio'

const highlights = [
  {
    icon: Building2,
    title: 'Enterprise modernization',
    detail: 'Building and evolving systems designed to serve real business needs.',
  },
  {
    icon: Cloud,
    title: 'Cloud-native engineering',
    detail: 'Hands-on delivery across GCP, AWS, containers and microservices.',
  },
  {
    icon: Award,
    title: 'Google Cloud certified',
    detail: 'Professional Cloud Architect certification.',
  },
]

function About() {
  return (
    <section className="content-section" id="about" aria-labelledby="about-title">
      <div className="section-shell">
        <div className="about-grid">
          <div className="about-main">
            <div className="section-heading">
              <p className="eyebrow">01 — About</p>
              <h2 id="about-title">Building technology that solves real problems.</h2>
            </div>
            <div className="about-copy">
              {portfolio.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <aside className="about-highlights" aria-label="Professional highlights">
            {highlights.map(({ icon: Icon, title, detail }, index) => (
              <article className="highlight-item" key={title}>
                <span className="highlight-number">0{index + 1}</span>
                <span className="highlight-icon"><Icon size={18} aria-hidden="true" /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
                <ArrowUpRight className="highlight-arrow" size={16} aria-hidden="true" />
              </article>
            ))}
          </aside>
        </div>
      </div>
    </section>
  )
}

export default About
