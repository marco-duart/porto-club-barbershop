import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      text: string;
      textLight: string;
      textDark: string;
      background: string;
      backgroundSecondary: string;
      border: string;
    },
    fonts: {
      body: string;
    },
}
