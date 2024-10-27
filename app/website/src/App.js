import logo from './logo.svg';
import './App.css';
import { MantineProvider } from "@mantine/core";
import { Header } from './components/Header';

function App() {
  return (
    <MantineProvider>
      <Header />
    </MantineProvider>
  );
}

export default App;
