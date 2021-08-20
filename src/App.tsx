import { Container } from "./components/container/Container";
import Navbar from "./components/navbar/Navbar";
import { ThemeProvider } from "./context/theme";

function App() {
  return (
    <ThemeProvider theme="light">
      <Container>
        <Navbar></Navbar>
      </Container>
    </ThemeProvider>
  );
}

export default App;
