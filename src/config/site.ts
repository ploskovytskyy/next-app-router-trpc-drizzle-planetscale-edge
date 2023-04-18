export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Next App Router with TRPC and Drizzle on Edge",
  description:
    "T3 stack using app router with TRPC on edge, Drizzle Orm with PlanetScale serverless driver",
  url: "",
  ogImage: "",
  links: {
    twitter: "https://twitter.com/o_ploskovytskyy",
    github: "/",
  },
};
