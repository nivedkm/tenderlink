import react, { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";
import TenderCards from "./TenderCards";
//import loader from "../assets/loader.svg";

const TenderList = () => {
  const { loadOpenTdrs, openTdrs } = useContext(TransactionContext);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await loadOpenTdrs();
      setLoading(false);
    };

    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col h-full p-2  bg-opacity-80 overflow-y-scroll scrollbar scrollbar-thumb-primary scrollbar-thin scrollbar-track-base-100">
      <div className="sticky top-0">
        <h1 className="font-bold text-4xl text-center mt-8">Tenders List</h1>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center w-full h-full">
          <span className ="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <div className="flex flex-wrap mt-4">
          {openTdrs.map((x) => (
            <TenderCards
              key={x.tdrId.id.toString()}
              title={x.tdrTitle.title}
              desc={x.tdrDesc.desc}
              industry={x.tdrIndustry.industry}
              endTime={x.tdrEndTime.endTime}
              ended={x.isEnded.ended}
              id={x.tdrId.id.toString()}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TenderList;
