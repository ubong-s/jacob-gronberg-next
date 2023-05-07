import {
  AboutHero,
  AboutIntro,
  CallToAction,
  Experiences,
  Layout,
  Recognitions,
  ResourcesFailedFetch,
  Seo,
} from "@/components";
import React from "react";
import { getAboutPage } from "../../sanity/sanity.utils";
import { AboutPageProps } from "@/types/aboutPage.type";

export default function About({
  aboutPageData,
}: {
  aboutPageData: AboutPageProps;
}) {
  const {
    aboutHero: { firstName, lastName, image },
    about,
    experiences,
    recognitions,
  } = aboutPageData;

  if (!aboutPageData) {
    return <ResourcesFailedFetch resources="about" />;
  }

  return (
    <>
      <Seo title="About" />

      <Layout>
        <AboutHero firstName={firstName} lastName={lastName} image={image} />
        <AboutIntro about={about} />
        <Experiences experiences={experiences} />
        <Recognitions recognitions={recognitions} />
        <CallToAction />
      </Layout>
    </>
  );
}

export const getServerSideProps = async () => {
  const data = await getAboutPage();

  return {
    props: {
      aboutPageData: data[0],
    },
  };
};
