import { portfolio } from '../data/portfolio'

function Experience() {
  return (
    <section className="content-section" id="experience" aria-labelledby="experience-title">
      <div className="section-shell">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">03 — Career</p>
            <h2 id="experience-title">Experience built on real-world systems.</h2>
          </div>
          <p className="section-side-note">
            Banking, healthcare and content management — across development, modernization and production support.
          </p>
        </div>
        <div className="experience-list">
          {portfolio.experience.map((item, index) => (
            <article className="experience-entry" key={`${item.title}-${item.organization}`}>
              <div className="experience-rail">
                <span className="experience-marker" aria-hidden="true" />
                <span className="experience-index">0{index + 1}</span>
              </div>
              <div className="experience-content">
                <div className="experience-topline">
                  <div>
                    <h3>{item.title}</h3>
                    <p className="experience-company">{item.organization}</p>
                  </div>
                  <time>{item.period}</time>
                </div>
                <p className="experience-domain">{item.domain}</p>
                <p className="experience-description">{item.description}</p>
                {item.contributions.length > 0 && (
                  <ul className="contribution-list">
                    {item.contributions.map((contribution) => (
                      <li key={contribution}>{contribution}</li>
                    ))}
                  </ul>
                )}
                <ul className="tag-list" aria-label={`${item.organization} technologies`}>
                  {item.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
