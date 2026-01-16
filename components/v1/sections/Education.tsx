import { education } from "@/data/personalDetails";
import Title from "../elements/Title";

export default function Education() {
  return (
    <section id="education" className="section education-clean">
      <div className="container mx-auto px-4">

        <div className="
              text-2xl md:text-3xl
              font-semibold
              text-text
              tracking-tight
              mb-4
            ">
          <h1>Education</h1>
        </div>

        <div className="education-list">
          {education.map((edu, i) => (
            <div key={i} className="tab-animate">
              <div className="education-row">
                {/* Left: Duration */}
                <div className="education-duration">
                  <span>{edu.duration.split("-")[0]}</span>
                  <span className="duration-sep">—</span>
                  <span>{edu.duration.split("-")[1]}</span>
                </div>

                {/* Right: Content */}
                <div className="education-content">
                  <div className="education-degree">
                    {edu.degree}
                  </div>

                  <div className="education-course">
                    {edu.course}
                  </div>

                  <div className="education-institution">
                    {edu.institution}
                  </div>

                  <p className="education-description">
                    {edu.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

  )
}