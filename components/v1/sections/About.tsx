import TypingText from "@/components/v1/elements/TypingText";
import { titles, name, quotes } from "@/data/personalDetails";
import QuotesCarousel from "@/components/v1/elements/QuotesCarousel";

export default function About() {
  return (
    <section className="hero-section">
      <div className="hero-container tab-animate">

        <h1 className="hero-title">
          Hi, I’m <span className="hero-name-inline">{name.first}</span><br />
          I build <span className="hero-accent">thoughtful</span> digital experiences
        </h1>


        <div className="hero-typing">
          <TypingText
            lines={titles}
            typingSpeed={120}
            deletingSpeed={80}
            pauseTime={2000}
          />
        </div>

        <p className="hero-description">
          I’m focused on decoding challenging problems, dividing them into manageable components, and solving them with elegant solutions.
          My inclination is towards crafting scalable and efficient systems that not only meet current requirements but are also adaptable for future growth.
        </p>
      </div>

      <QuotesCarousel
        quotes={quotes}
      />
    </section>

  )
}