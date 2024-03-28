import react, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GavelIcon from "@mui/icons-material/Gavel";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import TaskIcon from "@mui/icons-material/Task";
const Icons = () => {
  return (
    <div className="h-12 w-[550px]  flex  justify-evenly p-1 pt-2 bg-opacity-80 rounded-md ">
      <div className=" w-16 h-[54px] text-center rounded-sm flex flex-col hover:bg-gray-300 transition-all duration-300  ">
        <Link to="/">
          <HomeIcon className="" />
        <p className="text-sm pt-1 ">Home</p>
        </Link>
      </div>
      <div className=" w-16 h-[54px] text-center rounded-sm flex flex-col items-center hover:bg-gray-300 transition-all duration-300">
        <Link to="/tenders">
          <GavelIcon className="" />
        <p className="text-sm pt-1 ">Tenders</p>
        </Link>
      </div>

      <div className=" w-16 h-[54px] text-center rounded-sm flex flex-col items-center hover:bg-gray-300 transition-all duration-300">
        <Link to="/result">
          <TaskIcon className="" />
        <p className="text-sm pt-1 ">Results</p>
        </Link>
      </div>
      <div className=" w-16 h-[54px] text-center rounded-sm flex flex-col items-center hover:bg-gray-300 transition-all duration-300">
        <Link to="/admin">
          <SupervisorAccountIcon className="" />
        <p className="text-sm pt-1 ">Admin</p>
        </Link>
      </div>
    </div>
  );
};
export default Icons;
