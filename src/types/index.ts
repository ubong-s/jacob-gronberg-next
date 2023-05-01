export interface LinkProps {
  id: number;
  title: string;
  link: string;
}

export interface ServiceProps {
  id: number;
  title: string;
  description: string;
}

export interface TestimonialProps {
  id: string;
  image: string;
  name: string;
  highlight: string;
  fullQuote: string;
  role: string;
}

export interface ExhibitionProps {
  id: string;
  imageUrl: string;
  location: string;
  venue: string;
  year: number;
  day: number;
  month: string;
  headline: string;
  description: string;
  fullDescription: string;
  hours: string;
  address: string;
  status: "upcoming" | "completed";
}

export interface ProjectProps {
  id: string;
  name: string;
  description: string;
  details: {
    year: number;
    day: number;
    month: string;
    service: string;
    client: string;
    location: string;
  };
  coverImage: string;
  gallery: string[];
}

export interface ExperienceProps {
  id: number;
  role: string;
  company: string;
  timeline: string;
}
export interface RecognitionProps {
  id: number;
  award: string;
  organisation: string;
  date: string;
}

export interface ReturnLinkProps {
  returnLink?: string;
  returnText?: string;
}
