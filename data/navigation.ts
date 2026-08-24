export type NavItem = {
  href: string;
  label: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/my-work", label: "Work" },
  { href: "/contact", label: "Contact" },
];
