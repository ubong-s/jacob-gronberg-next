import { LinkProps, ServiceProps, TestimonialProps } from "@/types";

export const menu_list: LinkProps[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Projects",
    link: "/projects",
  },
  {
    id: 4,
    title: "Exhibitions",
    link: "/exhibitions",
  },
  {
    id: 5,
    title: "Contact",
    link: "/contact",
  },
];

export const social_list: LinkProps[] = [
  {
    id: 1,
    title: "twitter",
    link: "www.twitter.com",
  },
  {
    id: 2,
    title: "instagram",
    link: "www.instagram.com",
  },
  {
    id: 3,
    title: "facebook",
    link: "www.facebook.com",
  },
];

export const services_info: ServiceProps[] = [
  {
    id: 1,
    title: "Photoshooting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    id: 2,
    title: "Video Editing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    id: 3,
    title: "Art Direction",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
];

export const testimonials: TestimonialProps[] = [
  {
    id: "michelle_lindstrom",
    image: "/images/michelle_lindstrøm.png",
    name: "Michelle Lindstrøm",
    highlight: "I Really Enjoyed Working With Jacob",
    fullQuote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Laoreet sit amet cursus sit amet dictum sit amet justo. ",
    role: "Photoshoot",
  },
  {
    id: "jannis_jackson",
    image: "/images/jannis_jackson.png",
    name: "Jannis Jackson",
    highlight: "I Really Enjoyed Working With Jacob",
    fullQuote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra.",
    role: "Art Direction",
  },
  {
    id: "daniela_berg",
    image: "/images/daniela_berg.png",
    name: "Daniela Berg",
    highlight: "I Really Enjoyed Working With Jacob",
    fullQuote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    role: "Video Editing",
  },
];
