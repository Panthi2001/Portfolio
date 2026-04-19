import { useState } from 'react'
import './projects.css'

// import each image directly at the top
import shop1 from '../../assets/images/Project_images/Shop_simplify_1.png'
import shop2 from '../../assets/images/Project_images/Shop_simplify_3.png'

import cli1 from '../../assets/images/Project_images/CLI_1.webp'
import cli2 from '../../assets/images/Project_images/CLI_2.png'

import fake1 from '../../assets/images/Project_images/Fake_news_1.jpg'
import fake2 from '../../assets/images/Project_images/Fake_news_2.webp'
import fake3 from '../../assets/images/Project_images/Fake_news_3.png'

import macos from '../../assets/images/Project_images/macos.png'


const projects = [
  {
    title: 'Shop Simplify',
    subtitle: 'Full-Stack E-Commerce Platform',
    link: 'https://shop-simplify.vercel.app',
    linkLabel: 'shop-simplify.vercel.app',
    tags: ['React', 'Node.js', 'Firebase', 'REST API'],
    images: [
     shop1, shop2
    ],
    points: [
      'Architected a scalable e-commerce system supporting 100+ concurrent users with React, Node.js, and Firebase.',
      'Delivered a secure admin dashboard and RESTful APIs for workflow management, order processing, and data analytics.',
    ],
  },
  {
    title: 'Fake News Detection',
    subtitle: 'and Summarization',
    link: 'https://github.com/Panthi2001/Natural Language',
    linkLabel: 'github.com/Panthi2001/Natural Language',
    tags: ['Python', 'FastAPI', 'BERT', 'ML'],
    images: [
      fake1, fake2, fake3
    ],
    points: [
      'Engineered a machine learning workflow using Python, FastAPI, and BERT to classify fake news.',
      'Deployed summarization services for improved content accessibility.',
    ],
  },
  {
    title: 'CLI Helper Tool',
    subtitle: 'Command Line Interface',
    link: 'https://github.com/Panthi2001/cli query',
    linkLabel: 'github.com/Panthi2001/cli-query',
    tags: ['Bash', 'Python', 'OpenAI API'],
    images: [
      cli1,cli2
    ],
    points: [
      'Developed a shell-based productivity tool using Bash and Python.',
      'Integrated the OpenAI API for AI-driven query support and system analytics.',
    ],
  },
   {
    title: 'PDF Filename Stripper',
    subtitle: 'macOS Automation Tool',
    link: 'https://github.com/Panthi2001/folderwatcher',
    linkLabel: 'github.com/Panthi2001/folderwatcher',
    tags: ['Bash', 'macOS', 'fswatch', 'Automation'],
    images: [
      macos
    ],
    points: [
      'Built a Bash script that monitors a folder in real-time for new PDF files using fswatch on macOS.',
      'Automatically strips the last three characters from filenames and copies renamed files to a destination folder — originals remain unchanged.',
      'Prevents duplicate processing using a tracking file, ensuring consistent filename formatting in automated workflows.',
    ],
  },
]

function Projects() {
  const [active, setActive] = useState<number | null>(null)

  // one carousel index per project
  const [carouselIndex, setCarouselIndex] = useState<number[]>(
    projects.map(() => 0)
  )

  const prev = (e: React.MouseEvent, i: number) => {
    e.stopPropagation()
    setCarouselIndex(prev => {
      const updated = [...prev]
      updated[i] = (updated[i] - 1 + projects[i].images.length) % projects[i].images.length
      return updated
    })
  }

  const next = (e: React.MouseEvent, i: number) => {
    e.stopPropagation()
    setCarouselIndex(prev => {
      const updated = [...prev]
      updated[i] = (updated[i] + 1) % projects[i].images.length
      return updated
    })
  }

  return (
    <section className="proj-scene" id="project">
      <div className="proj-container">

        <div className="proj-header">
          <span className="proj-tag">// selected work</span>
          <h2 className="proj-heading">Projects.</h2>
        </div>

        <div className="proj-grid">
          {projects.map((proj, i) => (
            <div
              key={i}
              className={`proj-card ${active === i ? 'proj-card--active' : ''}`}
              onClick={() => setActive(prev => prev === i ? null : i)}
            >

              {/* carousel — hidden on mobile via CSS */}
              <div className="proj-card__carousel">
                <img
                  src={proj.images[carouselIndex[i]]}
                  alt={`${proj.title} screenshot ${carouselIndex[i] + 1}`}
                  className="proj-card__image"
                />

                {/* only show arrows if more than 1 image */}
                {proj.images.length > 1 && (
                  <>
                    <button
                      className="proj-carousel__btn proj-carousel__btn--left"
                      onClick={e => prev(e, i)}
                    >
                      ‹
                    </button>
                    <button
                      className="proj-carousel__btn proj-carousel__btn--right"
                      onClick={e => next(e, i)}
                    >
                      ›
                    </button>

                    <div className="proj-carousel__dots">
                      {proj.images.map((_, d) => (
                        <span
                          key={d}
                          className={`proj-carousel__dot ${d === carouselIndex[i] ? 'proj-carousel__dot--active' : ''}`}
                        />
                      ))}
                    </div>
                  </>
                )}

                <div className="proj-card__overlay">
                  <span className="proj-card__overlay-text">
                    {active === i ? 'click to close' : 'click to expand'}
                  </span>
                </div>
              </div>

              {/* header */}
              <div className="proj-card__header">
                <div className="proj-card__titles">
                  <h3 className="proj-card__title">{proj.title}</h3>
                  <p className="proj-card__subtitle">{proj.subtitle}</p>
                </div>
                <span className="proj-card__chevron">
                  {active === i ? '▲' : '▼'}
                </span>
              </div>

              {/* tags */}
              <div className="proj-card__tags">
                {proj.tags.map(tag => (
                  <span key={tag} className="proj-card__tag">{tag}</span>
                ))}
              </div>

              {/* expanded body */}
              {active === i && (
                <div
                  className="proj-card__body"
                  onClick={e => e.stopPropagation()}
                >
                  <ul className="proj-card__points">
                    {proj.points.map((point, j) => (
                      <li key={j} className="proj-card__point">{point}</li>
                    ))}
                  </ul>

                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-card__link"
                    onClick={e => e.stopPropagation()}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="proj-card__link-icon">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    {proj.linkLabel}
                  </a>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects