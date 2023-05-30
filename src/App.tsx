import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Elettrone from "./pages/Elettrone";
import FainelliGandhi from "./pages/FainelliGandhi";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/elettrone" element={<Elettrone />} />
        <Route path="/fainelli-gandhi" element={<FainelliGandhi />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
