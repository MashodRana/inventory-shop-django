import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from './Pages/HomePage/Home';
import LoggedHome from './Pages/HomePage/LoggedHome';
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<LoggedHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />}/>
          
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
