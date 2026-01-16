import { experience } from "@/data/personalDetails"; 

export default function Experience() {
  return (
    <section id="experience" className="section experience-clean">
      <div className="container mx-auto px-4">

        <div className="mb-12">
          <h1 className="experience-title">Experience</h1>
        </div>

        <div className="experience-list">
          {experience.map((exp, i) => (
            <div key={i} className="tab-animate">
              <div className="experience-row ">
              {/* Left: Duration */}
              <div className="experience-duration">
                <span>{exp.duration.split("-")[0]}</span>
                <span className="duration-sep">—</span>
                <span>{exp.duration.split("-")[1]}</span>
              </div>

              {/* Right: Content */}
              <div className="experience-content">
                <div className="experience-role">
                  {exp.role}
                </div>

                <div className="experience-company">
                  {exp.company}
                </div>

                <p className="experience-summary">
                  {
                  //exp.summary
                  }
                </p>

                {exp.responsibilities && (
                  <ul className="experience-highlights">
                    {exp.responsibilities.map((item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
