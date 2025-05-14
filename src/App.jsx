import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/header";
import Footer from "./pages/footer";
import History from "./pages/history";
import Family from "./pages/family";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="text-light bg-dark vh-100">
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Family" element={<Family />} />
            <Route path="/History" element={<History />} />
          </Routes>
        <Footer />
        </BrowserRouter>
    </div>
  )
}

export default App
