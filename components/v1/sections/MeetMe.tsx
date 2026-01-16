export default function MeetMe() {
  return (
    <section id="meet-me" className="section meet-clean">
      <div className="container mx-auto px-4">
        <div className="meet-center">
          {/* Title */}
          <div className="meet-header">
            <h1 className="meet-title">Meet Me</h1>
            <p className="meet-subtitle">
              As a person with open nature, I am always curious to meet new people, share perspectives, grow or sometimes be the reason for someones laugh :D.
              Feel free to reach out for collaborations, opportunities, or just a quick hello.
              Connect with me on LinkedIn, please refer the link below.
            </p>
          </div>

          <form className="meet-form" action="https://formspree.io/f/xzdddded" method="POST">
            <div className="meet-field">
              <label>Name</label>
              <input type="text" name="name" placeholder="Your name" required />
            </div>

            <input type="hidden" name="_subject" value="Portfolio Contact" />

            <div className="meet-field">
              <label>Email</label>
              <input type="email" name="email" placeholder="you@example.com" required />
            </div>

            <div className="meet-field">
              <label>Purpose</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Why are you reaching out?"
                required
              />
            </div>

            <button type="submit" className="meet-submit">
              Send Mail
            </button>
          </form>
        </div>
        </div>
    </section>
  )
}
