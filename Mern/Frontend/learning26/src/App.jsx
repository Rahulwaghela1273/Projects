//import './App.css'
import { HeaderComponent } from "./Components/HeaderComponent";
import FavPlayer from "./Components/FavPlayer";
function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
      }}>
      <FavPlayer />
    </div>
  );
}

export default App;
