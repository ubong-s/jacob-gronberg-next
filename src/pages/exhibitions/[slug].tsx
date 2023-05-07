import {
  CallToAction,
  ExhibitionContent,
  ExhibitionIntro,
  Layout,
  ResourceNotFound,
  Seo,
} from "@/components";
import { GetServerSidePropsContext } from "next";
import { getExhibition } from "../../../sanity/sanity.utils";
import { ExhibitionProps } from "@/types/exhibition.type";

export default function SingleExhibitionPage({
  exhibition,
}: {
  exhibition: ExhibitionProps;
}) {
  if (!exhibition) {
    return <ResourceNotFound resource="exhibition" />;
  }
  return (
    <>
      <Seo title={exhibition.name} />
      <Layout>
        <ExhibitionIntro
          date={exhibition.information.date}
          name={exhibition.name}
          image={exhibition.image}
        />
        <ExhibitionContent
          fullDescription={exhibition.fullDescription}
          date={exhibition.information.date}
          venue={exhibition.information.venue}
          address={exhibition.information.address}
          openingHours={exhibition.information.openingHours}
          directions={exhibition.information.directions}
        />
        <CallToAction />
      </Layout>
    </>
  );
}

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext<{ slug: string }>) {
  const { slug } = params as { slug: string };
  const data = await getExhibition(slug);

  return {
    props: {
      exhibition: data,
    },
  };
}
