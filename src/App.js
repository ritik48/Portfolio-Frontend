import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";

import NavBar from "./components/NavBar";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

import ProjectDetail from "./pages/ProjectDetail";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
