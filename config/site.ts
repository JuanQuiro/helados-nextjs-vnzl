export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Q Helados - Tu sitio de helados ideal",
  description: "Tu sitio de helados preferencial",
  navItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Sobre Nosotros",
      href: "/docs",
    },
    {
      label: "Precios",
      href: "/precio",
    },
    {
      label: "Publicaciones",
      href: "/publicaciones",
    },
    {
      label: "Contacto",
      href: "/contacto",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
