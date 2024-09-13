import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/theme";
import GlobalStyle from "./assets/styles/global-styles";
import BaseLayout from "./components/base-layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BaseLayout />
    </ThemeProvider>
  );
}

export default App;
