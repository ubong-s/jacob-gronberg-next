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
  status: "upcoming" | "completed";
}
