import { PortableTextBlock } from "sanity";

export interface ExhibitionProps {
  _id: string;
  _createdAt: Date;
  slug: string;
  name: string;
  image: string;
  ticketUrl: string;
  description: string;
  fullDescription: PortableTextBlock[];
  information: {
    date: Date;
    openingHours: string;
    venue: string;
    address: string;
    city: string;
    directions: string;
  };
  status: "upcoming" | "completed";
}
