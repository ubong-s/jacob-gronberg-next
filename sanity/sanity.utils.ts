import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client.config";
import { ProjectProps } from "@/types/project.type";
import { ExhibitionProps } from "@/types/exhibition.type";
import { AboutPageProps } from "@/types/aboutPage.type";

export async function getProjects(): Promise<ProjectProps[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type =="project"]  |  order(_createdAt asc) {
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "coverImage": coverImage.asset->url,
      description,
      details,
     "gallery": gallery[].asset->url
    }`
  );
}

export async function getProject(slug: string): Promise<ProjectProps> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
     _id,
      _createdAt,
      name,
      "slug": slug.current,
      "coverImage": coverImage.asset->url,
      description,
      details,
      "gallery": gallery[].asset->url,
      "next": *[_type == "project" && ^._createdAt < _createdAt] | order(_createdAt asc)[0]{ 
        "slug": slug.current, name,"coverImage": coverImage.asset->url
      },
    }`,
    { slug }
  );
}

export async function getExhibitions(): Promise<ExhibitionProps[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type =="exhibition"]  |  order(_createdAt asc) {
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      description,
      ticketUrl,
      fullDescription,
      information,
      status
    }`
  );
}

export async function getExhibition(slug: string): Promise<ExhibitionProps> {
  return createClient(clientConfig).fetch(
    groq`*[_type =="exhibition" && slug.current == $slug][0] {
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      description,
      ticketUrl,
      fullDescription,
      information,
      status
    }`,
    { slug }
  );
}

export async function getAboutPage(): Promise<AboutPageProps[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type =="aboutPage"] {
      _id,
      "aboutHero": {
        "firstName": aboutHero.firstName,
        "lastName": aboutHero.lastName,
        "image": aboutHero.image.asset->url,
      },
      about,
      recognitions,
      experiences
    }`
  );
}
