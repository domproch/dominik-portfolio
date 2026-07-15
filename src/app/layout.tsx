import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Dominik Procházka — Product, Hardware & Interaction Design",
  description:
    "Portfolio of Dominik Procházka — product, hardware, and interaction design in pursuit of a feeling of magic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function () {
            try {
              var stored = localStorage.getItem("theme");
              var theme =
                stored === "light" || stored === "dark"
                  ? stored
                  : window.matchMedia("(prefers-color-scheme: light)").matches
                    ? "light"
                    : "dark";
              document.documentElement.setAttribute("data-theme", theme);
            } catch (e) {}
          })();`}
        </Script>
        <div className="noise-overlay" aria-hidden="true" />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
