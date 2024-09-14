import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      text: string;
      background: string;
    },
    fonts: {
      body: string;
    },
}
