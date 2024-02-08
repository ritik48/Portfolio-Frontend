import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";

import NavBar from "./components/NavBar";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                
                <Route index element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
