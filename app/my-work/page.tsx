import { SiteShell } from "@/components/site-shell";
import { getPortfolioData } from "@/data/portfolio";

export const dynamic = "force-dynamic";

export default async function WorkPage() {
  const portfolio = await getPortfolioData();

  return (
    <SiteShell>
      <section className="page-section first-section">
        <div className="section-header">
          <h1>Work</h1>
        </div>

        <div className="project-grid">
          {portfolio.projects.map((project) => (
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
