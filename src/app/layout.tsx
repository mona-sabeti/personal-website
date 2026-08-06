import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mona Sabeti | Software Engineer",
  description:
    "Portfolio of Mona Sabeti, a software engineering graduate with experience in cybersecurity, automation, data analytics and full-stack development.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
