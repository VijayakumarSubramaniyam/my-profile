'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

import { navItems } from "@/data/navigation";
import type { PortfolioData } from "@/data/portfolio";

const emptyPortfolio: PortfolioData = { contactEmail: "", profile: { name: "", title: "", avatar: "", resumeUrl: "/assets/resume.pdf", location: "", email: "", phone: "", birthday: "" }, socials: [], contactDetails: [], intro: "", story: "", services: [], projects: [], education: [], experience: [], skills: [], technicalInterests: [], personalInformation: [], achievements: [] };

function SocialIcon({ glyph }: { glyph: string }) {
  if (glyph === "in") {
    return <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.2 8.3H1.7V22h3.5V8.3ZM3.45 2A2.05 2.05 0 1 0 3.45 6.1 2.05 2.05 0 0 0 3.45 2ZM22.3 14.15c0-4.12-2.2-6.04-5.14-6.04-2.37 0-3.43 1.3-4.02 2.21V8.3H9.65V22h3.49v-6.78c0-1.79.34-3.53 2.56-3.53 2.2 0 2.23 2.05 2.23 3.65V22h3.49l.88-7.85Z" /></svg>;
  }

  if (glyph === "gh") {
    return <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.71 2.63 1.22 3.27.93.1-.72.39-1.22.71-1.5-2.51-.28-5.15-1.26-5.15-5.6 0-1.24.44-2.25 1.16-3.05-.12-.28-.5-1.44.11-3 0 0 .95-.3 3.08 1.16A10.7 10.7 0 0 1 12 6.05c.96 0 1.92.13 2.82.38 2.13-1.46 3.08-1.16 3.08-1.16.61 1.56.23 2.72.11 3 .72.8 1.16 1.81 1.16 3.05 0 4.35-2.65 5.31-5.17 5.59.4.35.76 1.04.76 2.1v3.11c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z" /></svg>;
  }

  return <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true"><rect width="17" height="17" x="3.5" y="3.5" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" /></svg>;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname() || "/";
  const [portfolio, setPortfolio] = useState<PortfolioData>(emptyPortfolio);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => { fetch("/api/portfolio", { cache: "no-store" }).then((response) => response.json()).then((data: PortfolioData) => setPortfolio(data)).catch(() => setPortfolio(emptyPortfolio)); }, []);
  useEffect(() => setIsMenuOpen(false), [pathname]);

  return <main className="shell"><div className="app-frame"><div className="content-panel"><header className="topbar">
    <Link className="brand-lockup" href="/" aria-label="Go to homepage"><span className="brand-mark">VS</span><span className="brand-copy"><span className="brand-name">{portfolio.profile.name || "Vijaya Kumar S"}</span><span className="brand-role">{portfolio.profile.title || "UI Developer"}</span></span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{navItems.map((item) => <Link key={item.href} href={item.href} className={pathname === item.href ? "nav-link active" : "nav-link"}>{item.label}</Link>)}</nav>
    <a className="primary-button" href={portfolio.profile.resumeUrl || "/assets/resume.pdf"} download="Vijaya-Kumar-S-Resume.pdf">Download Resume</a>
    <button className="mobile-menu-button" type="button" aria-expanded={isMenuOpen} aria-controls="mobile-navigation" aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"} onClick={() => setIsMenuOpen((open) => !open)}><span className="menu-icon" aria-hidden="true"><span /><span /><span /></span></button>
    {isMenuOpen && <div className="mobile-drawer" id="mobile-navigation"><nav aria-label="Mobile navigation">{navItems.map((item) => <Link key={item.href} href={item.href} className={pathname === item.href ? "nav-link active" : "nav-link"}>{item.label}</Link>)}</nav></div>}
  </header>{children}<footer className="page-footer">© {new Date().getFullYear()} {portfolio.profile.name || "Vijaya Kumar S"}. UI Developer.</footer></div></div></main>;
}

export function SocialLinks({ portfolio }: { portfolio: PortfolioData }) { return <div className="hero-socials" aria-label="Social media links">{portfolio.socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}><SocialIcon glyph={social.glyph} /></a>)}</div>; }