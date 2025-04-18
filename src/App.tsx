import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import InfoSite from "./pages/InfoSite";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={}/> */}
        <Route path="info" element={<InfoSite/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
