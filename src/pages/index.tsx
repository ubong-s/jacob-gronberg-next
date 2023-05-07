import {
  CallToAction,
  ExhibitionsComponent,
  Hero,
  LatestWork,
  Layout,
  Services,
  Testimonials,
} from "@/components";
import Head from "next/head";
import Image from "next/image";
import { getExhibitions, getProjects } from "../../sanity/sanity.utils";
import { ExhibitionProps } from "@/types/exhibition.type";
import { ProjectProps } from "@/types/project.type";
<Hero />;

export default function Home({
  projects,
  exhibitions,
}: {
  projects: ProjectProps[];
  exhibitions: ExhibitionProps[];
}) {
  return (
    <>
      <Head>
        <title>Jacob Grønberg</title>
        <meta name="description" content="Photographer & Visual Artist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <Services />
        <LatestWork projects={projects.slice(0, 4)} />
        <ExhibitionsComponent
          exhibitions={exhibitions.filter(
            (exhibition) => exhibition.status === "upcoming"
          )}
        />
        <Testimonials />
        <CallToAction />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const projects = await getProjects();
  const exhibitions = await getExhibitions();

  return {
    props: {
      projects,
      exhibitions,
    },
  };
};
