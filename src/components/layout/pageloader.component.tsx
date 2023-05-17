import { PageLoaderWrap } from "./pageloader.styles";

export const PageLoader = ({
  routeChangeActive,
}: {
  routeChangeActive: boolean;
}) => {
  return (
    <PageLoaderWrap className={routeChangeActive ? "route__change" : ""}>
      <p>Jacob Grønberg</p>
    </PageLoaderWrap>
  );
};
