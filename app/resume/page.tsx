import { SiteShell } from "@/components/site-shell";
import { getPortfolioData } from "@/data/portfolio";

export const dynamic = "force-dynamic";

export default async function ResumePage() {
  const portfolio = await getPortfolioData();

  return (
    <SiteShell>
      <section className="page-section first-section">
        <div className="section-header">
          <h1>Resume</h1>
        </div>

        <div className="resume-layout">
          <div className="resume-column">
            <div className="mini-card">
              <h3>Education</h3>
              <div className="timeline-list">
                {portfolio.education.map((item) => (
                  <div key={item.title} className="timeline-item">
                    <span className="period">{item.period}</span>
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mini-card">
              <h3>Experience</h3>
              <div className="timeline-list">
                {portfolio.experience.map((item) => (
                  <div key={item.title} className="timeline-item">
                    <span className="period">{item.period}</span>
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="skills-column">
            {portfolio.skills.map((skillGroup) => (
              <div key={skillGroup.group} className="mini-card">
                <h3>{skillGroup.group}</h3>
                <div className="skill-group">
                  {skillGroup.items.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-meta">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="progress" aria-label={`${skill.name} ${skill.level}%`}>
                        <div className="progress-fill" style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="mini-card">
              <h3>Technical Interest</h3>
              <ul className="plain-list">
                {portfolio.technicalInterests.map((interest) => <li key={interest}>{interest}</li>)}
              </ul>
            </div>

            <div className="mini-card">
              <h3>Personal Information</h3>
              <ul className="plain-list">
                {portfolio.personalInformation.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <div className="mini-card">
              <h3>Achievements</h3>
              <ul className="plain-list">
                {portfolio.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
