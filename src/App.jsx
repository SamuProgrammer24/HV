import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    //Rutas del portafolio, de momento solo hay una
    <BrowserRouter>
      <Routes>
        <Route path="/Portfolio-Samuel" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
