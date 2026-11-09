import { portfolio } from '../data/portfolio'

function Skills() {
  return (
    <section className="content-section section-soft" id="skills" aria-labelledby="skills-title">
      <div className="section-shell">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">02 — Technical toolkit</p>
            <h2 id="skills-title">The tools behind the work.</h2>
          </div>
          <p className="section-side-note">
            A practical toolkit shaped by enterprise delivery, with AI and automation as growing areas of focus.
          </p>
        </div>
        <div className="skill-groups">
          {portfolio.skills.map((group, index) => (
            <article className="skill-group" key={group.category}>
              <div className="skill-group-heading">
                <span>0{index + 1}</span>
                <h3>{group.category}</h3>
              </div>
              <ul className="tag-list" aria-label={group.category}>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
