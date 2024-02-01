import { Link } from "react-router-dom";
import { useEffect } from "react";

const TenderCard = () => {
  return (
    <div className="flex flex-row flex-wrap justify-evenly ">
      <div className="bg-base-300 h-[500px] w-[315px] rounded-lg p-4 my-7 mx-4 flex flex-col text-center ">
        <div className="text-3xl base-content">title</div>
        <div className="flex flex-col h-full justify-center text-ellipsis overflow-hidden">
          description
        </div>
      </div>
    </div>
  );
};

export default TenderCard;
