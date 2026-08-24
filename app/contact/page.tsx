import { ContactForm } from "@/components/contact-form";
import { SiteShell } from "@/components/site-shell";
import { getPortfolioData } from "@/data/portfolio";

export const dynamic = "force-dynamic";

export default async function ContactPage() {
  const portfolio = await getPortfolioData();

  return (
    <SiteShell>
      <section className="page-section first-section">
        <div className="section-header">
          <h1>Contact</h1>
        </div>

        <div className="contact-grid">
          <div className="contact-block">
            <h3>Let&apos;s build something meaningful.</h3>
            <p>
              I enjoy turning product ideas into thoughtful experiences and can help shape the frontend,
              CMS strategy, and product delivery for your next digital product.
            </p>
            <ul className="contact-list">
              <li>Email: {portfolio.profile.email}</li>
              <li>Phone: {portfolio.profile.phone}</li>
              <li>Location: {portfolio.profile.location}</li>
            </ul>
          </div>

          <div className="contact-block">
            <ContactForm />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
