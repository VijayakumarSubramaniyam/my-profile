'use client';

import { useEffect, useState } from "react";

import type { PortfolioData } from "@/data/portfolio";

export const dynamic = "force-dynamic";

const emptyPortfolio: PortfolioData = {
  contactEmail: "",
  profile: {
    name: "",
    title: "",
    avatar: "",
    resumeUrl: "/assets/resume.pdf",
    location: "",
    email: "",
    phone: "",
    birthday: "",
  },
  socials: [],
  contactDetails: [],
  intro: "",
  story: "",
  services: [],
  projects: [],
  education: [],
  experience: [],
  skills: [],
  technicalInterests: [],
  personalInformation: [],
  achievements: [],
};

export default function AdminPage() {
  const [portfolio, setPortfolio] = useState<PortfolioData>(emptyPortfolio);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPortfolio() {
      const response = await fetch("/api/portfolio");
      const data = (await response.json()) as PortfolioData;
      setPortfolio(data);
      setLoading(false);
    }

    loadPortfolio();
  }, []);

  async function savePortfolio(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Saving changes...");

    const response = await fetch("/api/portfolio", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(portfolio),
    });

    const data = await response.json();
    setMessage(data.ok ? "Portfolio updated successfully." : "Unable to save the content.");
  }

  if (loading) {
    return <div className="admin-shell">Loading CMS content...</div>;
  }

  return (
    <main className="admin-shell">
      <div className="admin-card">
        <h1>Portfolio CMS</h1>
        <p>Update your portfolio content and click Save. Changes are stored in the local JSON data source.</p>

        <form className="cms-form" onSubmit={savePortfolio}>
          <div className="cms-grid">
            <label>
              <span>Profile name</span>
              <input
                value={portfolio.profile.name}
                onChange={(event) =>
                  setPortfolio({
                    ...portfolio,
                    profile: { ...portfolio.profile, name: event.target.value },
                  })
                }
              />
            </label>

            <label>
              <span>Title</span>
              <input
                value={portfolio.profile.title}
                onChange={(event) =>
                  setPortfolio({
                    ...portfolio,
                    profile: { ...portfolio.profile, title: event.target.value },
                  })
                }
              />
            </label>

            <label>
              <span>Email</span>
              <input
                value={portfolio.profile.email}
                onChange={(event) =>
                  setPortfolio({
                    ...portfolio,
                    profile: { ...portfolio.profile, email: event.target.value },
                  })
                }
              />
            </label>

            <label>
              <span>Contact form recipient</span>
              <input
                type="email"
                required
                value={portfolio.contactEmail || portfolio.profile.email}
                onChange={(event) => setPortfolio({ ...portfolio, contactEmail: event.target.value })}
              />
            </label>

            <label>
              <span>Phone</span>
              <input
                value={portfolio.profile.phone}
                onChange={(event) =>
                  setPortfolio({
                    ...portfolio,
                    profile: { ...portfolio.profile, phone: event.target.value },
                  })
                }
              />
            </label>

            <label>
              <span>Location</span>
              <input
                value={portfolio.profile.location}
                onChange={(event) =>
                  setPortfolio({
                    ...portfolio,
                    profile: { ...portfolio.profile, location: event.target.value },
                  })
                }
              />
            </label>

            <label>
              <span>Birthday</span>
              <input
                value={portfolio.profile.birthday}
                onChange={(event) =>
                  setPortfolio({
                    ...portfolio,
                    profile: { ...portfolio.profile, birthday: event.target.value },
                  })
                }
              />
            </label>

            <label className="full-width">
              <span>Intro</span>
              <textarea
                rows={4}
                value={portfolio.intro}
                onChange={(event) => setPortfolio({ ...portfolio, intro: event.target.value })}
              />
            </label>

            <label className="full-width">
              <span>Story</span>
              <textarea
                rows={4}
                value={portfolio.story}
                onChange={(event) => setPortfolio({ ...portfolio, story: event.target.value })}
              />
            </label>

            <label className="full-width">
              <span>Raw JSON</span>
              <textarea
                rows={16}
                value={JSON.stringify(portfolio, null, 2)}
                onChange={(event) => {
                  try {
                    const next = JSON.parse(event.target.value) as PortfolioData;
                    setPortfolio(next);
                  } catch {
                    // keep the raw text for manual editing until it is valid JSON
                  }
                }}
              />
            </label>
          </div>

          <div className="cms-actions">
            <button type="submit" className="primary-button">Save content</button>
            {message ? <p className="cms-status">{message}</p> : null}
          </div>
        </form>
      </div>
    </main>
  );
}
