import { useContext, useEffect, useState } from "react";
import ResultCard from "./ResultCard";
import { TransactionContext } from "../context/TransactionContext";
import { formatEther } from "ethers/lib/utils";
//tno={} tname={} winner={} amount={} allbids={} ystatus={}
const Result = () => {
  const { loadOpenTdrs, resltTdrs } = useContext(TransactionContext);
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
    <div className="flex flex-col h-full ml-2  p-5 ">
      <div>
        <h1 className="font-bold text-4xl">Result</h1>
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center w-full h-full">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Tender No</th>
              <th>Tender Name</th>
              <th>Winner</th>
              <th>Amount</th>
              {/* <th>All bids</th> */}
              <th>Your status</th>
            </tr>
          </thead>
          <tbody>
            {resltTdrs.map((x) => (
              <ResultCard
                key={x.rtdrId.id.toString()}
                tno={x.rtdrId.id.toString()}
                tname={x.rtdrTitle.title}
                winner={x.rtdrWname.winnerName}
                amount={x.rtdrWnamt.winningBidAmt.toString()}
                status="won"
               
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Result;
