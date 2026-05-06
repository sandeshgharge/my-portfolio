import { awardsData } from "@/data/personalDetails";

import {
  Trophy,
  Medal,
  Award,
  Star,
  BadgeCheck,
} from "lucide-react";

const iconMap : Record<string, React.ComponentType<{ size?: number }>> = {
  trophy: Trophy,
  medal: Medal,
  award: Award,
  star: Star,
  badge: BadgeCheck,
};

export default function AwardsSection() {
  return (
    <section className="awards-section" id="awards">
      <div className="awards-container">
        <span className="awards-eyebrow">Recognition</span>

        <h2 className="awards-title">
          Awards & <span className="awards-accent">Achievements</span>
        </h2>

        <p className="awards-description">
          Milestones and accomplishments that reflect my passion for building
          scalable systems, solving meaningful problems, and continuously
          evolving as an engineer.

          <a
            href="https://www.linkedin.com/in/sandeshgharge/details/honors/"
            target="_blank"
            rel="noopener noreferrer"
            className="award-link"
            >
            View certificates on LinkedIn →
            </a>
        </p>

        
        <div className="awards-grid">
          {awardsData.map((award, index) => {
            const IconComponent = iconMap[award.icon];

            return (
              <div className="award-card" key={index}>
                <div className="award-icon">
                  {IconComponent && <IconComponent size={28} />}
                </div>

                <div className="award-header">
                  <h3>{award.title}</h3>
                  <span>{award.year}</span>
                </div>

                <p>{award.description}</p>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}