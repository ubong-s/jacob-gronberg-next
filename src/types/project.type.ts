import { PortableTextBlock } from "sanity";

export interface ProjectProps {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  description: PortableTextBlock[];
  details: {
    year: number;
    month: string;
    service: string;
    client: string;
    location: string;
  };
  coverImage: string;
  gallery: string[];
  next?: {
    coverImage: string;
    slug: string;
    name: string;
  };
}

export interface GalleryProps {
  _key: string;
  asset: {
    _ref: string;
    _type: string;
  };
  _type: string;
  alt: string;
}
