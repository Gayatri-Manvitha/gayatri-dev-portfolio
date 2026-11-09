import { ArrowDownRight, FlaskConical } from 'lucide-react'
import { portfolio } from '../data/portfolio'

function Projects() {
  return (
    <section className="content-section section-soft" id="projects" aria-labelledby="projects-title">
      <div className="section-shell">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">04 — In the works</p>
            <h2 id="projects-title">Ideas for the next build.</h2>
          </div>
          <p className="section-side-note">
            Independent demonstration concepts. These are planned projects, not completed products or client systems.
          </p>
        </div>
        <div className="project-grid">
          {portfolio.projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-card-top">
                <span className="project-number">0{index + 1}</span>
                <span className="project-status"><FlaskConical size={14} aria-hidden="true" />{project.status}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-overview">{project.overview}</p>
              <ul className="tag-list" aria-label={`${project.title} technologies`}>
                {project.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <details className="project-details">
                <summary>
                  Explore the concept <ArrowDownRight size={16} aria-hidden="true" />
                </summary>
                <div className="project-detail-content">
                  <h4>Problem</h4>
                  <p>{project.problem}</p>
                  <h4>Proposed architecture</h4>
                  <p>{project.architecture}</p>
                  <h4>Engineering decisions</h4>
                  <p>{project.decisions}</p>
                  <h4>Planned capabilities</h4>
                  <ul>
                    {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                </div>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
