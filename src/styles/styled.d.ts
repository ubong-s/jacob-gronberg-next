//  import original module declarations
import "styled-components";

export type roundings = {
  sm: string;
  md: string;
  lg: string;
};

export type sizes = {
  headingXLarge: string;
  headingLarge: string;
  headingMedium: string;
  headingSmall: string;
  headingOne: string;
  headingTwo: string;
  headingThree: string;
  headingFour: string;
  headingFive: string;
  headingSix: string;
  textLarge: string;
  textMedium: string;
  textDefault: string;
  textSmall: string;
};

export type colors = {
  default: string;
  primary: string;
  muted: string;
  white: string;
  black: string;
  body:string
};

export type typography = {
  clashDisplay: string;
};

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    roundings: roundings;
    typography: typography;
    colors: colors;
    sizes: sizes;
  }
}
