import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home/Home";
import { CrearVideo } from "./Pages/CrearVideo/CrearVideo";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element= {<CrearVideo/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
