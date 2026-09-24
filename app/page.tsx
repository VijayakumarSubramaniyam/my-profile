import Link from "next/link";

import { SiteShell, SocialLinks } from "@/components/site-shell";
import { getPortfolioData } from "@/data/portfolio";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const portfolio = await getPortfolioData();

  return (
    <SiteShell>
      <section className="hero-panel first-section">
        <div className="hero-copy">
          <p className="eyebrow">Hello, I&apos;m</p>
          <h1>Vijaya Kumar S<span className="gradient-text">UI Developer</span></h1>
          <p className="hero-description">{portfolio.intro}</p>
          <div className="hero-actions"><Link className="button-gradient" href="/my-work">View My Work <span aria-hidden="true">→</span></Link><Link className="button-ghost" href="/contact">Contact Me</Link></div>
          <SocialLinks portfolio={portfolio} />
        </div>
        <div className="hero-visual">
          <div className="portrait-frame"><img src={portfolio.profile.avatar} alt={portfolio.profile.name} /></div>
          <div className="hero-facts">
            <div className="glass-card skills-card"><h3>Skills &amp; Technologies</h3><div className="skill-chips">{portfolio.skills.flatMap((group) => group.items).slice(0, 14).map((skill) => <span className="skill-chip" key={skill.name}>{skill.name}</span>)}</div></div>
            <div className="glass-card fact-row"><div className="fact"><span className="fact-label">Experience</span><span className="fact-value">9+ Years</span></div><div className="fact"><span className="fact-label">Location</span><span className="fact-value">{portfolio.profile.location}</span></div></div>
          </div>
        </div>
      </section>

      <section className="page-section work-section">
        <div className="section-header row">
          <div><p className="section-kicker">My work</p><h2>Projects <span>&amp; Applications</span></h2><p className="section-copy">A collection of web applications and enterprise solutions I&apos;ve worked on, showcasing my skills in UI development, Angular, TypeScript, and modern web technologies.</p></div>
          <Link href="/my-work" className="text-link">
            View all <span>→</span>
          </Link>
        </div>

        <div className="project-grid">
          {portfolio.projects.slice(0, 6).map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-image-wrap">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-copy">
                <span className="project-tag">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
