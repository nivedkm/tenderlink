import { useContext, useEffect, useState } from "react";
import ResultCard from "./ResultCard";
import { TransactionContext } from "../context/TransactionContext";
import { ethers } from "ethers";

const Result = () => {
  const { loadOpenTdrs, resltTdrs, currentAccount, setCurrentAccount } =
    useContext(TransactionContext);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await loadOpenTdrs();
      setLoading(false);
    };
    const handleAccountsChanged = (account) => {
      setCurrentAccount(account[0]);
    };

    setTimeout(() => {
      fetchData();
    }, 1000);
    // Calls handleAccountsChanged when accounts change
    window.ethereum.on("accountsChanged", handleAccountsChanged);
    return () => {
      window.ethereum.off("accountsChanged", handleAccountsChanged);
    };
  }, []);

  return (
    <div className="flex flex-col h-full   p-5 ">
      <div className="w-full text-center pt-10 pb-10">
        <h1 className="font-bold text-4xl">Results</h1>
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center w-full h-full">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <div className="shadow-md p-4">
          <table className="w-full h-full ">
            <thead className="bg-secondary text-lg text-secondary-content bg-opacity-50">
              <tr className="h-10 border-t-4 border-base-100 rounded-md">
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
                  status={
                    x.rtdrWnaddress.winnerAddress.toString().toLowerCase() ==
                    currentAccount.toString().toLowerCase()
                      ? "Won"
                      : "Lost"
                  }
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Result;
