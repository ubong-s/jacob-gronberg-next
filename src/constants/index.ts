import {
  ExhibitionProps,
  LinkProps,
  ServiceProps,
  TestimonialProps,
} from "@/types";

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
    link: "mailto:ubongsly@gmail.com",
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
    image: "/images/testimonials/michelle_lindstrøm.png",
    name: "Michelle Lindstrøm",
    highlight: "I Really Enjoyed Working With Jacob",
    fullQuote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Laoreet sit amet cursus sit amet dictum sit amet justo. ",
    role: "Photoshoot",
  },
  {
    id: "jannis_jackson",
    image: "/images/testimonials/jannis_jackson.png",
    name: "Jannis Jackson",
    highlight: "I Really Enjoyed Working With Jacob",
    fullQuote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra.",
    role: "Art Direction",
  },
  {
    id: "daniela_berg",
    image: "/images/testimonials/daniela_berg.png",
    name: "Daniela Berg",
    highlight: "I Really Enjoyed Working With Jacob",
    fullQuote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    role: "Video Editing",
  },
];

export const exhibitions_data: ExhibitionProps[] = [
  {
    id: "independent-beauty",
    imageUrl: "/images/exhibitions/independent-beauty.png",
    location: "New York",
    venue: "Townhall",
    year: 2023,
    day: 16,
    month: "Jun",
    headline: "Independent Beauty",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    status: "upcoming",
  },
  {
    id: "in-humanity-we-trust",
    imageUrl: "/images/exhibitions/in-humanity-we-trust.png",
    location: "Berlin",
    venue: "Kunsthalle",
    year: 2023,
    day: 2,
    month: "May",
    headline: "In Humanity We Trust",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    status: "upcoming",
  },
  {
    id: "berlin-at-night",
    imageUrl: "/images/exhibitions/berlin-at-night.png",
    location: "Berlin",
    venue: "Kunsthalle",
    year: 2023,
    day: 24,
    month: "Jul",
    headline: "Berlin at Night",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
    status: "upcoming",
  },

  {
    id: "solo-beauty",
    imageUrl: "/images/exhibitions/solo-beauty.png",
    location: "New York",
    venue: "Townhall",
    year: 2022,
    day: 16,
    month: "Jun",
    headline: "Solo Beauty",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    status: "completed",
  },
  {
    id: "humanity-is-not-lost",
    imageUrl: "/images/exhibitions/humanity-is-not-lost.png",
    location: "Berlin",
    venue: "Kunsthalle",
    year: 2022,
    day: 2,
    month: "May",
    headline: "Humanity is not lost",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    status: "completed",
  },
  {
    id: "berlin-at-morning",
    imageUrl: "/images/exhibitions/berlin-at-morning.png",
    location: "Berlin",
    venue: "Kunsthalle",
    year: 2022,
    day: 24,
    month: "Jul",
    headline: "Berlin at morning",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
    status: "completed",
  },
];
