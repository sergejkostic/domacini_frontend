import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import DrugiPage from "./pages/Drugipage";

function App() {
  return (
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path ="/drugipage" element={<DrugiPage/>} />
            </Routes>
        </BrowserRouter>
      );
  }

export default App;
