import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import TenderCard from "./components/TenderCard";
import CreateTender from "./components/CreateTender";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="flex flex-col h-screen bg-white bg-opacity-5 ">
      <div>
        <NavBar />
      </div>

      <div className="flex flex-row h-full m-2 overflow-hidden">
        <div className="w-max">{/* <Sidebar /> */}</div>
        <div className="w-full h-full">
          {/* <TenderCard/> */}
          {/*<Home/> */}
          <CreateTender/> 
        </div>
      </div>

      <div>{/* <Footer /> */}</div>
    </div>
  );
};

export default App;
