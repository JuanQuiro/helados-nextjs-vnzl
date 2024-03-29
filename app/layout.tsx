import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen scrollbar scrollbar-thumb-orange-500 scrollbar-track-white scrollbar-w-1  bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full hidden  sm:flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center group gap-1 text-current"
                href="https://www.linkedin.com/in/dreyz/"
                title="linkedin del desarrollador"
              >
                <span className="text-default-600">
                  Todos los derechevos reservados 2023 ©{" "}
                </span>
                <span className="text-default-600 group-hover:text-blue-500/80">
                  - Dev Juan Quiroz
                </span>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
