import { Container } from "./components/container/Container";
import Navbar from "./components/navbar/Navbar";
import { ThemeProvider } from "./context/theme";

function App() {
  return (
    <ThemeProvider theme="default">
      <Container>
        <Navbar />
      </Container>
    </ThemeProvider>
  );
}

export default App;
