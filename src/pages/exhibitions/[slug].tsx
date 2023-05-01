import {
  CallToAction,
  ExhibitionContent,
  ExhibitionIntro,
  Layout,
  Seo,
} from "@/components";

export default function SingleExhibitionPage() {
  return (
    <>
      <Seo title="Single Exhibition" />
      <Layout>
        <ExhibitionIntro />
        <ExhibitionContent />
        <CallToAction />
      </Layout>
    </>
  );
}
