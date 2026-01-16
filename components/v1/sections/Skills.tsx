import { skills } from '@/data/personalDetails'

type Skill = {
  name: string
  level: number
}

type SkillGroup = {
  category: string
  skills: Skill[]
}

export default function Skills() {
  return (
    <section id="skills" className="section skills-clean">
      <div className="container mx-auto px-4">

        <div className="mb-12">
          <h1 className="skills-title">Skills</h1>
        </div>

        <div className="skills-groups">
          {skills.map((group, gi) => (
            <div key={gi} className="skills-group">

              {/* Category heading */}
              <h2 className="skills-category">
                {group.category}
              </h2>

              {/* Skills grid */}
              <div className="skills-grid">
                {group.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="skill-row tab-animate"
                    style={{ '--level': `${skill.level}%` } as React.CSSProperties}
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-value">{skill.level}%</span>
                    </div>

                    <div className="skill-bar">
                      <div className="skill-bar-fill" />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
