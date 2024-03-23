import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import CreateTender from "./components/CreateTender";
import TenderList from "./components/TenderList";
import TenderBid from "./components/TenderBid";
import Home from "./components/Home";
import Result from "./components/Result";

const App = () => {
  return (
    <div className="flex flex-col h-screen bg-white bg-opacity-5 ">
      <div className="sticky">
        <NavBar />
      </div>

      <div className="flex flex-row h-full ">
        <div className="w-full h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<CreateTender />} />
            <Route path="/bid/:id" element={<TenderBid />} />
            <Route path="/tenders" element={<TenderList />} />
            <Route path="/result" element={<Result />} />
          </Routes>
          {/* <CreateTender /> */}
        </div>
      </div>

      <div>{/* <Footer /> */}</div>
    </div>
  );
};

export default App;
