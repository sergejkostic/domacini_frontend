import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage.jsx";
import Navbar from "./pages/Navbar/Navbar.jsx";
import CelcerPage from './pages/Celcerpage/CelcerPage';

function App() {
  return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/celcerpage' element={<CelcerPage/>} />
            </Routes>
        </BrowserRouter>
      );
  }

export default App;
