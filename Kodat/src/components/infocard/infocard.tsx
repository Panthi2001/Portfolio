import { useState, useEffect } from 'react'
import './infocard.css'
import './infocardextended.css'


const contacts = [
  { label: 'Email', value: 'kushalpanthi13@gmail.com', href: 'mailto:kushalpanthi13@gmail.com' },
  { label: 'GitHub', value: 'Panthi2001', href: 'https://github.com/Panthi2001' },
  { label: 'LinkedIn', value: 'kushalpanthi2001', href: 'https://linkedin.com/in/kushalpanthi2001' },
  { label: 'Instagram', value: 'kushal_apr14', href: 'https://www.instagram.com/kushal_apr14/' },
]

const skills = ['React', 'JavaScripting', 'Azure', 'SQL', 'Git', 'Docker', 'C++','Prompting','AI','CI/CD','Python']

function InfoCard() {
  const [flipped, setFlipped] = useState(false)
  const [skillsVisible, setSkillsVisible] = useState(false)  // auto-shows after delay
  const [dismissed, setDismissed] = useState<string[]>([])

  const handleFlip = () => {
    setFlipped(f => !f)
    if (flipped) {
      // flipping back to front — reset skills
      setSkillsVisible(false)
      setDismissed([])
    }
  }

  // when card flips to back, wait 400ms then show skills automatically
  useEffect(() => {
    if (flipped) {
      const timer = setTimeout(() => setSkillsVisible(true), 400)
      return () => clearTimeout(timer)  // cleanup if card flips back before timer fires
    }
  }, [flipped])

  const dismissSkill = (e: React.MouseEvent, skill: string) => {
    e.stopPropagation()
    setDismissed(prev => [...prev, skill])
  }

  const visibleSkills = skills.filter(s => !dismissed.includes(s))

  return (
    <>
    <section className="infocard-scene" id="home">
      <div
        className={`infocard-wrapper ${flipped ? 'infocard-wrapper--flipped' : ''}`}
        onClick={handleFlip}
      >

        {/* FRONT */}
        <div className="infocard infocard--front">
          <div className="infocard__accent" />
          <div className="infocard__left">
            <div className="infocard__avatar">KP</div>
            <div>
              <h1 className="infocard__name">Kushal Panthi</h1>
              
              <p className="infocard__title">A Software Engineer & Writer</p>
            </div>
          </div>

          <div className="infocard__vdivider" />

          <div className="infocard__right">
            <p className="infocard__contact-heading">Contact</p>
            {contacts.map(c => (
              <a
                key={c.label}
                href={c.href}
                className="infocard__contact-row"
                onClick={e => e.stopPropagation()}
              >
                {c.label}: {c.value}
              </a>
            ))}
          </div>

          {/* hint on front side too */}
          <p className="infocard__hint infocard__hint--front">click to flip</p>
        </div>

        {/* BACK */}
        <div className="infocard infocard--back">
          <div className="infocard__kp-logo">KP</div>

          {/* skills show automatically after delay */}
          {skillsVisible && (
            <div className="infocard__balloons">
              {visibleSkills.map((skill, i) => (
                <button
                  key={skill}
                  className="infocard__balloon"
                  style={{ animationDelay: `${i * 0.08}s` }}
                  onClick={e => dismissSkill(e, skill)}
                >
                  {skill}
                </button>
              ))}
            </div>
          )}

          {dismissed.length > 0 && visibleSkills.length === 0 && (
            <p className="infocard__back-hint">all cleared!</p>
          )}

          <p className="infocard__hint"></p>
        </div>

      </div>
    </section>
    
    </>
  )
}

export default InfoCard