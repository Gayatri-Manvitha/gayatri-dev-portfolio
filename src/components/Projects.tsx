import { portfolio } from '../data/portfolio'

function Projects() {
  return (
    <section className="content-section" id="projects">
      <div className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Projects made with purpose.</h2>
        </div>
        {portfolio.projects.length > 0 ? (
          <div className="card-grid">
            {portfolio.projects.map((project) => (
              <article className="portfolio-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.skills && project.skills.length > 0 && (
                  <ul className="tag-list" aria-label={`${project.title} technologies`}>
                    {project.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                )}
                {project.link && (
                  <a
                    className="card-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View project ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        ) : (
          <p className="empty-state">
            Add projects to the <code>projects</code> list in{' '}
            <code>src/data/portfolio.ts</code>.
          </p>
        )}
      </div>
    </section>
  )
}

export default Projects
