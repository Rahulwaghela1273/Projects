import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import FormDemo1 from "./components/form/FormDemo1";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/formdemo1" element={<FormDemo1 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
