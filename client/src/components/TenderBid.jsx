import react, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { TransactionContext } from "../context/TransactionContext";

const TenderBid = (props) => {
  const {
    openTdrs,
    handleChangeBidAmt,
    handleChangeBidderName,
    placeOpenBid,
    setTdrID,
    tdrID,
    loadOpenTdrs,
    getPrevOpenBids,
    OpenBids,
  } = useContext(TransactionContext);

  const [isLoading, setLoading] = useState(true);
  const { id } = useParams(); // Using useParams to get id from URL params
  const opentdr = openTdrs[id];

  const handlePlaceOpenBid = () => {
    console.log(tdrID);
    placeOpenBid();
  };

  useEffect(() => {
    console.log("id is", id);
    // console.log(id);

    setTdrID(id);
    console.log("Setting tdrID to:", tdrID);

    setTimeout(() => {
      setLoading(true);
      loadOpenTdrs();
      getPrevOpenBids();
      setLoading(false);
    }, 1000);
  }, [tdrID]);
  return tdrID ? (
    <div className="bg-base-300 h-full   p-5   grid grid-row-6 grid-cols-3 bg-opacity-80">
      {console.log(tdrID)}
      <div className="row-span-1 col-span-full text-4xl font-bold">Tender</div>
      <div className="row-span-2 col-span-2 grid grid-row-3 p-3 bg-base-300 m-3 rounded-lg">
        <div className="text-2xl row-span-1 text-center font-bold ">
          {opentdr?.tdrTitle?.title}
        </div>
        <div className="row-span-3">
          {opentdr?.tdrIndustry?.industry}
          <div>{opentdr?.tdrDesc?.desc}</div>
        </div>
      </div>
      <div className="row-span-2 col-span-1 text-center p-3 bg-base-300 m-3 rounded-lg grid grid-rows-5 ">
        <div className="text-xl row-start-1 font-bold">
          Highest Bid <br /> {opentdr?.tdrMaxBid.maxBid / 10 ** 18} ETH
        </div>

        <div className="row-start-3">
          <input
            type="text"
            placeholder="Enter Amount in ETH"
            className="w-full bg-base-200 border-neutral focus:border-primary px-4 py-2"
            onChange={handleChangeBidAmt}
          />
        </div>
        <div className="row-start-4">
          <input
            type="text"
            placeholder="Enter Name"
            className="w-full bg-base-200 border-neutral focus:border-primary px-4 py-2"
            onChange={handleChangeBidderName}
          />
        </div>
        <div className="row-start-5">
          <button
            className="btn hover:bg-primary w-[200px]"
            onClick={handlePlaceOpenBid}
          >
            Bid
          </button>
        </div>
      </div>
      <div className="row-span-3 col-span-full p-3 bg-base-300 m-3 rounded-lg">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <div className="font-bold px-5">Bidder Address</div>
              <div className="font-bold px-5">Bid Amount</div>
            </div>
            {isLoading ? (
              <div className="px-5">Loading</div>
            ) : (
              <>
                <div>
                  {OpenBids.map((x) => (
                    <div
                      className="flex flex-row justify-between"
                      key={x?.bidderAdr?.bidder}
                    >
                      <div className="px-5">{x.bidderAdr?.bidder}</div>
                      <div className="px-5">
                        {x?.amt.bidderAmt / 10 ** 18} ETH
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p>Loading</p>
  );
};

export default TenderBid;
