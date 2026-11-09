import { portfolio } from '../data/portfolio'

function Experience() {
  return (
    <section className="content-section" id="experience">
      <div className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">The journey</p>
          <h2>Experience & learning.</h2>
        </div>
        {portfolio.experience.length > 0 ? (
          <div className="card-grid">
            {portfolio.experience.map((item) => (
              <article className="portfolio-card" key={`${item.title}-${item.organization}`}>
                <h3>{item.title}</h3>
                {item.organization && (
                  <span className="card-meta">{item.organization}</span>
                )}
                {item.period && (
                  <span className="card-meta">{item.period}</span>
                )}
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        ) : (
          <p className="empty-state">
            Add roles, internships, or other experience to the{' '}
            <code>experience</code> list in <code>src/data/portfolio.ts</code>.
          </p>
        )}
      </div>
    </section>
  )
}

export default Experience
