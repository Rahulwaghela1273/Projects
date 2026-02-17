import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import FormDemo1 from "./components/form/FormDemo1";
import { ApiDemo1 } from "./components/api/apiDemo1";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<FormDemo1 />} />
        <Route path="/formdemo1" element={<FormDemo1 />}></Route>
        <Route path="/apidemo1" element={<ApiDemo1 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
