import { portfolio } from '../data/portfolio'

function Skills() {
  return (
    <section className="content-section" id="skills">
      <div className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">My toolkit</p>
          <h2>Skills I’m building with.</h2>
        </div>
        {portfolio.skills.length > 0 ? (
          <ul className="tag-list" aria-label="Skills">
            {portfolio.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        ) : (
          <p className="empty-state">
            Add your skills to the <code>skills</code> list in{' '}
            <code>src/data/portfolio.ts</code>.
          </p>
        )}
      </div>
    </section>
  )
}

export default Skills
