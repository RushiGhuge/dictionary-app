import "./App.css";
import Navbar from "./Componants/Navbar";
import SearchBar from "./Componants/SearchBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Componants/Home";
import History from "./Componants/History";
import { useSelector } from "react-redux";
import DisplayResult from "./Componants/DisplayResult";

function App() {
  const history = useSelector((state) => state);
  console.log(history);
  // const history = [1, 2, 3];
  console.log(history);
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="history" element={<History />} />
        {history.length > 0 &&
          history.map((item, idx) => {
            console.log(idx);
            return <Route key={idx} path={`/${item[0].word}`} element={<DisplayResult result={item}/>} />;
          })}
      </Routes>
    </div>
  );
}

export default App;
