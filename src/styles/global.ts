import { createGlobalStyle, css } from "styled-components";
import { mediaQueries } from "./variables";

/* Reset styles start */
const resetCss = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
/* Reset styles end */

/* HTML styles start */
const htmlStyles = css`
  font-size: 10px;
  scroll-behavior: smooth;

  * {
    transform-origin: center center;
  }
`;
/* HTML styles end */

/* Body styles start */
const bodyStyles = css`
  background-color: ${(props) => props.theme.colors.body};
  color: ${(props) => props.theme.colors.default};
  max-width: 192rem;
  font-size: ${(props) => props.theme.sizes.textDefault};
  font-family: ${(props) => props.theme.typography.clashDisplay};

  a {
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s ease;
    color: ${(props) => props.theme.colors.default};
  }

  /* Typography styles start */
  p {
    font-family: ${(props) => props.theme.typography.clashDisplay};
    line-height: 2rem;
    color: ${(props) => props.theme.colors.default};
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${(props) => props.theme.typography.clashDisplay};
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 1rem;
    font-weight: 400;
  }

  h1 {
    font-size: 7.5rem;
    line-height: 7.5rem;

    ${mediaQueries.tablet} {
      font-size: 12rem;
      line-height: 11rem;
    }

    ${mediaQueries.desktop} {
      font-size: 20rem;
      line-height: 18rem;
    }
  }

  /* Typography styles End */

  img {
    max-width: 100%;
  }

  button {
    cursor: pointer;
    letter-spacing: 1px;
    font-size: 1.4rem;
    font-family: ${(props) => props.theme.typography.clashDisplay};

    ${mediaQueries.desktop} {
      font-size: 1.6rem;
    }
  }
`;
/* Body styles end */

/* Global styles start */
export const GlobalStyle = createGlobalStyle`



  ${resetCss}

  html {
   ${htmlStyles}
  }

  body {
    ${bodyStyles}
  }
  `;
/* Global styles end */
