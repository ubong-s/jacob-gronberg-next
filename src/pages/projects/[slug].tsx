import {
  Layout,
  NextProject,
  ProjectContent,
  ProjectGallery,
  ProjectIntro,
  Seo,
} from "@/components";
import { projects_data } from "@/constants";
import { GetServerSidePropsContext } from "next";
import { getProject } from "../../../sanity/sanity.utils";
import { ProjectProps } from "@/types/project.type";

export default function SingleProjectPage({
  project,
}: {
  project: ProjectProps;
}) {
  console.log(project);

  return (
    <>
      <Seo title={project.name} />
      <Layout>
        <ProjectIntro name={project.name} image={project.coverImage} />
        <ProjectContent
          description={project.description}
          details={project.details}
        />
        <ProjectGallery name={project.name} gallery={project.gallery} />
        {project.next && (
          <NextProject
            name={project.next.name}
            image={project.next.coverImage}
            url={project.next.slug}
          />
        )}
      </Layout>
    </>
  );
}

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext<{ slug: string }>) {
  const { slug } = params as { slug: string };
  const data = await getProject(slug);

  return {
    props: {
      project: data,
    }, // will be passed to the page component as props
  };
}
