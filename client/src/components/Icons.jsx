import react, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GavelIcon from "@mui/icons-material/Gavel";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import TaskIcon from "@mui/icons-material/Task";
const Icons = () => {
  return (
    <div className="h-12 w-[550px]  flex  justify-evenly p-2 bg-opacity-80 rounded-md ">
      <div className=" w-9 text-center rounded-sm flex flex-col hover:bg-primary-focus ">
        <Link to="/">
          <HomeIcon className="hover:opacity-60" />
        </Link>
        <p className="text-sm pt-1 ">Home</p>
      </div>
      <div className=" w-9 text-center rounded-sm flex flex-col items-center hover:bg-primary-focus ">
        <Link to="/tenders">
          <GavelIcon className="hover:opacity-60" />
        </Link>
        <p className="text-sm pt-1 ">Tenders</p>
      </div>

      <div className=" w-9 text-center rounded-sm flex flex-col items-center hover:bg-primary-focus ">
        <Link to="/result">
          <TaskIcon className="hover:opacity-60" />
        </Link>
        <p className="text-sm pt-1 ">Results</p>
      </div>
      <div className=" w-9 text-center rounded-sm flex flex-col items-center hover:bg-primary-focus ">
        <Link to="/admin">
          <SupervisorAccountIcon className="hover:opacity-60" />
        </Link>
        <p className="text-sm pt-1 ">Admin</p>
      </div>
    </div>
  );
};
export default Icons;
