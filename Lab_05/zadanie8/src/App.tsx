import './App.css'
import Licznik from "./components/Licznik";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import AddArticle from "./pages/AddArticle";

function zadanie8_1() {
    return <div><Licznik/></div>
}

function App() {
    // return zadanie8_1();
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/dodaj" element={<AddArticle />} />
        </Routes>
    )
}

export default App
