import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
  title: {
    // write a default title for astra a ai powered website builder suggest something unique and catchy don't use the same words of ai powered website builder give a unique name
    default: "Astra",
    template: `Astra`,
  },
  description:
    "Astra is an AI powered website builder that helps you create a website in minutes. No coding skills required. Get started for free!",
  icons: {
    icon: [
      {
        url: "/icons/favicon.ico",
        href: "/icons/favicon.ico",
      },
    ],
  },
  openGraph: {
    title: "Astra",
    description:
      "Astra is an AI powered website builder that helps you create a website in minutes. No coding skills required. Get started for free!",
    images: [
      {
        url: "/assets/og-image.png",
      },
    ],
  },
};
