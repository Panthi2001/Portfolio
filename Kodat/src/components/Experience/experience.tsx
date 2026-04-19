import { useState } from 'react'
import './experience.css'



const experiences = [
  {
    role: 'Software Engineer Intern',
    company: 'Unalome Digital',
    location: 'Kathmandu, Nepal',
    period: '2022 – 2023',
    points: [
      'Collaborated with cross-functional teams to translate business needs into technical solutions — custom dashboards and workflow tools using React and Node.js.',
      'Designed, implemented, and documented scalable API endpoints (Express/Django) for operational data integration and reporting.',
      'Automated core business processes and data pipelines, increasing reporting efficiency and data visibility.',
      'Conducted SQL-based data analysis and developed RESTful services supporting real-time dashboard features.',
      'Deployed and monitored applications with AWS and Firebase.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Namaste Media Inc',
    location: 'Queens, New York',
    period: '2023 – 2025',
    points: [
      'Built key features for digital media systems — full-stack web modules in React and Node.js in agile sprints.',
      'Developed, tested, and maintained backend logic (Node.js, Django, SQL) for secure data transactions.',
      'Produced real-time dashboards and process automations improving cycle times for business operations.',
      'Assisted in root-cause analysis, bug-fixing, and feature implementation.',
      'Documented workflows, API contracts, and participated in code reviews.',
    ],
  },
  {
    role: 'Student & Research Assistant',
    company: 'University of North Texas',
    location: 'Denton, Texas',
    period: '2024 – 2025',
    points: [
      'Guided peers in debugging full-stack projects and applying best practices in software engineering.',
      'Automated repetitive tasks and assisted faculty with instructional content for programming courses.',
      'Managed secure server infrastructure (VPN, SSH, SFTP) and version control (Git).',
    ],
  },
]

function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(prev => (prev === i ? null : i))
  }

  return (
    <section className="exp-scene" id="experience">
      <div className="exp-container">

        <div className="exp-header">
          <span className="exp-tag">// work history</span>
          <h2 className="exp-heading">Experience.</h2>
        </div>

        <div className="exp-timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="exp-entry">

              <div className="exp-spine">
                <div className="exp-dot" />
                {i < experiences.length - 1 && <div className="exp-line" />}
              </div>

              <div
                className={`exp-card ${openIndex === i ? 'exp-card--open' : ''}`}
                onClick={() => toggle(i)}
              >
                <div className="exp-card__header">
                  <div className="exp-card__meta">
                    <h3 className="exp-card__role">{exp.role}</h3>
                    <p className="exp-card__company">
                      {exp.company}
                      <span className="exp-card__location"> — {exp.location}</span>
                    </p>
                  </div>
                  <div className="exp-card__right">
                    <span className="exp-card__period">{exp.period}</span>
                    <span className="exp-card__chevron">
                      {openIndex === i ? '▲' : '▼'}
                    </span>
                  </div>
                </div>

                {openIndex === i && (
                  <div className="exp-card__body" onClick={e => e.stopPropagation()}>
                    <ul className="exp-card__points">
                      {exp.points.map((point, j) => (
                        <li key={j} className="exp-card__point">{point}</li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
       
    </section>
  )
}

export default Experience