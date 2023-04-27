export const roundings = {
  sm: "2px",
  md: "8px",
  lg: "16px",
};

export const sizes = {
  headingXLarge: "200px",
  headingLarge: "100px",
  headingMedium: "70px",
  headingSmall: "60px",
  headingOne: "50px",
  headingTwo: "40px",
  headingThree: "30px",
  headingFour: "24px",
  headingFive: "18px",
  headingSix: "14px",
  textLarge: "22px",
  textMedium: "18px",
  textDefault: "16px",
  textSmall: "14px",
};

export const colors = {
  default: "#101010",
  primary: "#DB574D",
  muted: "rgba(16, 16, 16, 0.1)",
  white: "#FFFFFF",
  black: "#000000",
  body: "#EEEDEE",
};

export const typography = {
  clashDisplay: `'Clash Display', serif`,
};

export const breakpoints = {
  mobile: "375px",
  tablet: "768px",
  desktop: "1024px",
  large: "1100px",
  hd: "1366px",
};

const mobile = `@media screen and (min-width: ${breakpoints.mobile})`;
const tablet = `@media screen and (min-width: ${breakpoints.tablet})`;
const desktop = `@media screen and (min-width: ${breakpoints.desktop})`;
const large = `@media screen and (min-width: ${breakpoints.large})`;
const hd = `@media screen and (min-width: ${breakpoints.hd})`;

export const mediaQueries = {
  mobile,
  tablet,
  desktop,
  large,
  hd,
};

export const dimensions = {
  headerHeight: "64px",
};
