import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./Components/Landing/Landing";
import Proyectos from "./Components/Proyectos/Proyectos";
import Contacto from "./Components/Contacto/Contacto";
import Info from "./Components/Info/Info";
import ThemeProvider from "./Components/Theme/Themes";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/mis-proyectos" element={<Proyectos />} />
          <Route exact path="/sobre-mi" element={<Info />} />
          <Route exact path="/contactame" element={<Contacto />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
