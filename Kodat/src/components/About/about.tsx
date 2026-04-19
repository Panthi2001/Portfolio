
import './about.css'

import myPhoto from '../../assets/images/Profile/profile.jpeg'

function About() {
  return (
    <section className="about-scene" id="about">

      <div className="about-container">

        {/* LEFT — text side */}
        <div className="about-left">
          <span className="about-tag">// about me</span>
          <h2 className="about-heading">About<br />Me.</h2>

          <p className="about-body">
         I'm a software engineer and data enthusiast based in Denton, TX — a
recent Computer Science graduate from the University of North Texas.
I build full-stack systems and data pipelines that solve real problems,
with a focus on clean code, scalable architecture, and interfaces that
actually make sense to the people using them.
          </p>

          <p className="about-body">
            My experience spans internships in Kathmandu and New York, where I
            worked across React, Node.js, Django, SQL, Tableau, PowerBI and cloud platforms like AWS
            and Azure(data factory and azure databricks). I've built dashboards, automated pipelines, designed
            APIs, and shipped features.
          </p>

          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat__number">5+</span>
              <span className="about-stat__label">Projects Built</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__number">4+</span>
              <span className="about-stat__label">Years Coding</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__number">10+</span>
              <span className="about-stat__label">Technologies</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__number">2+</span>
              <span className="about-stat__label">Experience</span>
            </div>
          </div>
        </div>

        {/* RIGHT — photo side */}
      <div className="about-right">
  <div className="about-image-wrapper">
    <div className="about-image-placeholder">
      <img src={myPhoto} alt="Kushal Panthi" />  {/* ← curly braces, not quotes */}
    </div>
    <div className="about-image-border" />
  </div>
</div>

      </div>

    </section>
  )
}

export default About