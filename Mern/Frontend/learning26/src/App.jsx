import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import FormDemo1 from "./components/form/FormDemo1";
import { ApiDemo1 } from "./components/api/apiDemo1";
import MovieDetail from "./components/api/MovieDetail";
import { MovieList } from "./components/api/MovieList";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<FormDemo1 />} />
        <Route path="/formdemo1" element={<FormDemo1 />}></Route>
        <Route path="/apidemo1" element={<ApiDemo1 />}></Route>
        <Route path="/movielist" element={<MovieList />} />
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
