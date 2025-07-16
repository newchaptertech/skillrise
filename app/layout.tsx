import "./css/style.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "SkillRise | Rise with New Skills.",
  description:
    "Actionable well-designed courses and tools to help you master digital skills, boost productivity, and build a healthier, more focused life.",
  openGraph: {
    title: "SkillRise | Rise with New Skills.",
    description:
      "Actionable well-designed courses and tools to help you master digital skills, boost productivity, and build a healthier, more focused life.",
    url: "https://skillrise.com/",
    type: "website",
    images: [
      {
        url: "/images/logo.png", // Update with your preferred preview image
        width: 1200,
        height: 630,
        alt: "Skillrise Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkillRise | Rise with New Skills.",
    description:
      "Actionable well-designed courses and tools to help you master digital skills, boost productivity, and build a healthier, more focused life.",
    images: ["/images/logo.png"], // Update with your preferred preview image
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
