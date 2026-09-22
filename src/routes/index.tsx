import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roman Hrydin | Junior Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Roman Hrydin, a Junior Full-Stack Developer working with React, Next.js, TypeScript, Node.js, REST APIs, and MongoDB.",
      },
      { property: "og:title", content: "Roman Hrydin | Junior Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Explore Roman Hrydin’s full-stack projects, technical skills, education, and professional background.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});
