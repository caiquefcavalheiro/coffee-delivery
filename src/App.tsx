import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Página inicial</h1>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
