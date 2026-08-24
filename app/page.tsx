import Link from "next/link";

import { SiteShell } from "@/components/site-shell";
import { getPortfolioData } from "@/data/portfolio";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const portfolio = await getPortfolioData();

  return (
    <SiteShell>
      <section className="page-section first-section">
        <div className="section-header">
          <p className="eyebrow">Hello there</p>
          <h1>About</h1>
        </div>

        <div className="story-grid">
          <div className="story-card">
            <p>{portfolio.intro}</p>
            <p>{portfolio.story}</p>
          </div>

          <div className="services-panel">
            <h3>What I do!</h3>
            <div className="service-list">
              {portfolio.services.map((service) => (
                <div key={service.title} className="service-item">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-header row">
          <h2>Projects</h2>
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
