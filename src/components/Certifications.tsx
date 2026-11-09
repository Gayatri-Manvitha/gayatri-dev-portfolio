import { portfolio } from '../data/portfolio'

function Certifications() {
  return (
    <section className="content-section" id="certifications">
      <div className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Learning milestones</p>
          <h2>Certifications & education.</h2>
        </div>
        {portfolio.certifications.length > 0 ? (
          <div className="card-grid">
            {portfolio.certifications.map((certification) => (
              <article className="portfolio-card" key={certification.title}>
                <h3>{certification.title}</h3>
                {certification.organization && (
                  <span className="card-meta">
                    {certification.organization}
                  </span>
                )}
                {certification.period && (
                  <span className="card-meta">{certification.period}</span>
                )}
                <p>{certification.description}</p>
                {certification.link && (
                  <a
                    className="card-link"
                    href={certification.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View credential ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        ) : null}
        {portfolio.education.length > 0 && (
          <>
            <div className="section-heading education-heading">
              <p className="eyebrow">Education</p>
            </div>
            <div className="card-grid">
              {portfolio.education.map((item) => (
                <article className="portfolio-card" key={item.title}>
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
          </>
        )}
      </div>
    </section>
  )
}

export default Certifications
