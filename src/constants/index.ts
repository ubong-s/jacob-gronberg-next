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
    link: "mailto:ubongsly@gmail.com",
  },
];

export const info_list: LinkProps[] = [
  {
    id: 1,
    title: "Styleguide",
    link: "#",
  },
  {
    id: 2,
    title: "Licensing",
    link: "#",
  },
  {
    id: 3,
    title: "Changelog",
    link: "#",
  },
];

export const social_list: LinkProps[] = [
  {
    id: 1,
    title: "twitter",
    link: "https://www.twitter.com",
  },
  {
    id: 2,
    title: "instagram",
    link: "https://www.instagram.com",
  },
  {
    id: 3,
    title: "facebook",
    link: "https://www.facebook.com",
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

export const exhibitions_data = [
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
    fullDescription:
      "<span>Massa vitae tortor condimentum lacinia quis vel eros donec. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.  Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.</span> <span>Sit amet aliquam id diam maecenas ultricies mi eget. Tortor id aliquet lectus proin. Varius quam quisque id diam vel quam elementum pulvinar.</span> <span> Nisi porta lorem mollis aliquam ut. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Eget nullam non nisi est sit amet facilisis magna etiam. Et tortor at risus viverra adipiscing at in tellus integer. Mi sit amet mauris commodo quis imperdiet massa.</span>",
    hours: "Monday to Saturday from 11 pm to 6 pm",
    address: "Main Street 2, 12101 New York",
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
    fullDescription:
      "<span>Massa vitae tortor condimentum lacinia quis vel eros donec. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.  Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.</span> <span>Sit amet aliquam id diam maecenas ultricies mi eget. Tortor id aliquet lectus proin. Varius quam quisque id diam vel quam elementum pulvinar.</span> <span> Nisi porta lorem mollis aliquam ut. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Eget nullam non nisi est sit amet facilisis magna etiam. Et tortor at risus viverra adipiscing at in tellus integer. Mi sit amet mauris commodo quis imperdiet massa.</span>",
    hours: "Monday to Saturday from 11 pm to 6 pm",
    address: "Main Street 2, 12101 Berlin",
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

    fullDescription:
      "<span>Massa vitae tortor condimentum lacinia quis vel eros donec. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.  Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.</span> <span>Sit amet aliquam id diam maecenas ultricies mi eget. Tortor id aliquet lectus proin. Varius quam quisque id diam vel quam elementum pulvinar.</span> <span> Nisi porta lorem mollis aliquam ut. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Eget nullam non nisi est sit amet facilisis magna etiam. Et tortor at risus viverra adipiscing at in tellus integer. Mi sit amet mauris commodo quis imperdiet massa.</span>",
    hours: "Monday to Saturday from 11 pm to 6 pm",
    address: "Main Street 2, 12101 Berlin",
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
    fullDescription:
      "<span>Massa vitae tortor condimentum lacinia quis vel eros donec. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.  Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.</span> <span>Sit amet aliquam id diam maecenas ultricies mi eget. Tortor id aliquet lectus proin. Varius quam quisque id diam vel quam elementum pulvinar.</span> <span> Nisi porta lorem mollis aliquam ut. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Eget nullam non nisi est sit amet facilisis magna etiam. Et tortor at risus viverra adipiscing at in tellus integer. Mi sit amet mauris commodo quis imperdiet massa.</span>",
    hours: "Monday to Saturday from 11 pm to 6 pm",
    address: "Main Street 2, 12101 New York",
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
    fullDescription:
      "<span>Massa vitae tortor condimentum lacinia quis vel eros donec. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.  Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.</span> <span>Sit amet aliquam id diam maecenas ultricies mi eget. Tortor id aliquet lectus proin. Varius quam quisque id diam vel quam elementum pulvinar.</span> <span> Nisi porta lorem mollis aliquam ut. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Eget nullam non nisi est sit amet facilisis magna etiam. Et tortor at risus viverra adipiscing at in tellus integer. Mi sit amet mauris commodo quis imperdiet massa.</span>",
    hours: "Monday to Saturday from 11 pm to 6 pm",
    address: "Main Street 2, 12101 Berlin",
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
    fullDescription:
      "<span>Massa vitae tortor condimentum lacinia quis vel eros donec. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.  Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.</span> <span>Sit amet aliquam id diam maecenas ultricies mi eget. Tortor id aliquet lectus proin. Varius quam quisque id diam vel quam elementum pulvinar.</span> <span> Nisi porta lorem mollis aliquam ut. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Eget nullam non nisi est sit amet facilisis magna etiam. Et tortor at risus viverra adipiscing at in tellus integer. Mi sit amet mauris commodo quis imperdiet massa.</span>",
    hours: "Monday to Saturday from 11 pm to 6 pm",
    address: "Main Street 2, 12101 Berlin",
    status: "completed",
  },
];

export const projects_data = [
  {
    id: "dancing-in-the-wild",
    name: "Dancing In The Wild",
    description:
      "<span>Massa vitae tortor condimentum lacinia quis vel eros donec. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.</span> <span>Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.</span> <span>Sit amet aliquam id diam maecenas ultricies mi eget. Tortor id aliquet lectus proin. Varius quam quisque id diam vel quam elementum pulvinar.</span>",
    details: {
      year: 2022,
      day: 8,
      month: "October",
      service: "Photo Shooting",
      client: "Jonathan Åberg",
      location: "New York",
    },
    coverImage: "/images/projects/dancing-in-the-wild.png",
    gallery: [
      "/images/projects/sample-1.jpg",
      "/images/projects/sample-2.jpg",
      "/images/projects/sample-3.jpg",
      "/images/projects/sample-4.jpg",
      "/images/projects/sample-5.jpg",
    ],
  },
  {
    id: "style-and-fashion",
    name: "Style & Fashion",
    description:
      "<span>Massa vitae tortor condimentum lacinia quis vel eros donec. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.</span> <span>Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.</span> <span>Sit amet aliquam id diam maecenas ultricies mi eget. Tortor id aliquet lectus proin. Varius quam quisque id diam vel quam elementum pulvinar.</span>",
    details: {
      year: 2022,
      day: 10,
      month: "July",
      service: "Photo Shooting",
      client: "Jonathan Åberg",
      location: "Berlin",
    },
    coverImage: "/images/projects/style-and-fashion.png",
    gallery: [
      "/images/projects/sample-1.jpg",
      "/images/projects/sample-2.jpg",
      "/images/projects/sample-3.jpg",
      "/images/projects/sample-4.jpg",
      "/images/projects/sample-5.jpg",
    ],
  },
  {
    id: "week-fashion",
    name: "Week Fashion",
    description:
      "<span>Massa vitae tortor condimentum lacinia quis vel eros donec. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.</span> <span>Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.</span> <span>Sit amet aliquam id diam maecenas ultricies mi eget. Tortor id aliquet lectus proin. Varius quam quisque id diam vel quam elementum pulvinar.</span>",
    details: {
      year: 2022,
      day: 8,
      month: "May",
      service: "Video Editing",
      client: "Jonathan Åberg",
      location: "New York",
    },
    coverImage: "/images/projects/week-fashion.png",
    gallery: [
      "/images/projects/sample-1.jpg",
      "/images/projects/sample-2.jpg",
      "/images/projects/sample-3.jpg",
      "/images/projects/sample-4.jpg",
      "/images/projects/sample-5.jpg",
    ],
  },
  {
    id: "one-eye",
    name: "One Eye",
    description:
      "<span>Massa vitae tortor condimentum lacinia quis vel eros donec. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.</span> <span>Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.</span> <span>Sit amet aliquam id diam maecenas ultricies mi eget. Tortor id aliquet lectus proin. Varius quam quisque id diam vel quam elementum pulvinar.</span>",
    details: {
      year: 2022,
      day: 15,
      month: "March",
      service: "Photo Shooting",
      client: "Slamma",
      location: "New York",
    },
    coverImage: "/images/projects/one-eye.png",
    gallery: [
      "/images/projects/sample-1.jpg",
      "/images/projects/sample-2.jpg",
      "/images/projects/sample-3.jpg",
      "/images/projects/sample-4.jpg",
      "/images/projects/sample-5.jpg",
    ],
  },
  {
    id: "be-slient",
    name: "Be Silent",
    description:
      "<span>Massa vitae tortor condimentum lacinia quis vel eros donec. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.</span> <span>Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.</span> <span>Sit amet aliquam id diam maecenas ultricies mi eget. Tortor id aliquet lectus proin. Varius quam quisque id diam vel quam elementum pulvinar.</span>",
    details: {
      year: 2022,
      day: 9,
      month: "February",
      service: "Photo Shooting",
      client: "Buscabulla",
      location: "New York",
    },
    coverImage: "/images/projects/be-slient.png",
    gallery: [
      "/images/projects/sample-1.jpg",
      "/images/projects/sample-2.jpg",
      "/images/projects/sample-3.jpg",
      "/images/projects/sample-4.jpg",
      "/images/projects/sample-5.jpg",
    ],
  },
  {
    id: "cigarette-and-tobacco",
    name: "Cigarette & Tobacco",
    description:
      "<span>Massa vitae tortor condimentum lacinia quis vel eros donec. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.</span> <span>Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.</span> <span>Sit amet aliquam id diam maecenas ultricies mi eget. Tortor id aliquet lectus proin. Varius quam quisque id diam vel quam elementum pulvinar.</span>",
    details: {
      year: 2022,
      day: 8,
      month: "February",
      service: "Video Editing",
      client: "Ibeyi",
      location: "New York",
    },
    coverImage: "/images/projects/cigarette-and-tobacco.png",
    gallery: [
      "/images/projects/sample-1.jpg",
      "/images/projects/sample-2.jpg",
      "/images/projects/sample-3.jpg",
      "/images/projects/sample-4.jpg",
      "/images/projects/sample-5.jpg",
    ],
  },
  {
    id: "wonderful-body",
    name: "Wonderful Body",
    description:
      "<span>Massa vitae tortor condimentum lacinia quis vel eros donec. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.</span> <span>Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.</span> <span>Sit amet aliquam id diam maecenas ultricies mi eget. Tortor id aliquet lectus proin. Varius quam quisque id diam vel quam elementum pulvinar.</span>",
    details: {
      year: 2022,
      day: 8,
      month: "October",
      service: "Photo Shooting",
      client: "Jonathan Åberg",
      location: "New York",
    },
    coverImage: "/images/projects/wonderful-body.png",
    gallery: [
      "/images/projects/sample-1.jpg",
      "/images/projects/sample-2.jpg",
      "/images/projects/sample-3.jpg",
      "/images/projects/sample-4.jpg",
      "/images/projects/sample-5.jpg",
    ],
  },
];

export const experiences_data = [
  {
    id: 1,
    role: "Art Director",
    company: "Art Studio",
    timeline: "Okt 2020 - Currently",
  },
  {
    id: 2,
    role: "Jury",
    company: "Awwwards",
    timeline: "June 2020",
  },
  {
    id: 3,
    role: "Photographer & Art director",
    company: "Freelance",
    timeline: "Okt 2019 - Sep 2020",
  },
  {
    id: 4,
    role: "Art Study",
    company: "Harvard",
    timeline: "Jan 2016 - Sep 2019",
  },
];

export const recognitions_data = [
  {
    id: 1,
    award: "Photography Portfolio ",
    organisation: "Awwwards",
    date: "Feb 2022",
  },
  {
    id: 2,
    award: "Cover Photo",
    organisation: "Time Magazine",
    date: "May 2021",
  },
  {
    id: 3,
    award: "Design Portfolio",
    organisation: "Awwwards",
    date: "Dec 2020",
  },
];
