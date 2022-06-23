import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Movie from "./page/Movie";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<Movie />} />
    </Routes>
  );
}

export default App;
