import { useForm, ValidationError } from '@formspree/react'
import './contactform.css'

function ContactForm() {

  const formId = import.meta.env.VITE_FORMSPREE_ID

  const [state, handleSubmit] = useForm(formId)

  return (
    <section className="form-scene" id="contact">
      <div className="form-container">

        {/* LEFT — message */}
        <div className="form-left">
          <span className="form-tag">// get in touch</span>
          <h2 className="form-heading">Let's<br />Talk.</h2>
          <p className="form-body">
            Thanks for making it this far — it means a lot. Whether you have
            a project in mind, a question, or just want to say hello, my
            inbox is always open.
          </p>
          <p className="form-body">
            I'm currently open to new opportunities and collaborations.
            I'll do my best to get back to you as soon as possible.
          </p>
           <p className="form-body" >Kushal Panthi</p>

          <div className="form-socials">
            
            <a href="mailto:kushalpanthi13@gmail.com" className="form-social-link">
              kushalpanthi13@gmail.com
            </a>
          </div>
        </div>

        {/* vertical divider */}
        <div className="form-vdivider" />
      
        {/* RIGHT — form */}
        <div className="form-right">
          {state.succeeded ? (
            <div className="form-success">
              <span className="form-success__icon">✓</span>
              <h3 className="form-success__title">Message sent!</h3>
              <p className="form-success__body">
                Thanks for reaching out — I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form-inside">

              <div className="form-field">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="you@example.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="form-error" />
              </div>

              <div className="form-field">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="What's on your mind?"
                  rows={6}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="form-error" />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="form-button"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  )
}

export default ContactForm