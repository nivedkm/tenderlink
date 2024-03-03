import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAdress } from "../utils/constants";
export const TransactionContext = React.createContext();

if (typeof window.ethereum == "undefined") {
  alert("Install Metamask!");
}

const { ethereum } = window;

window.ethereum;
// To fetch the contract
const getOpenContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  // Create an instance of the contract
  const openContract = new ethers.Contract(contractAdress, contractABI, signer);

  return openContract;
};

export const TransactionProvider = ({ children }) => {
  const openTender = getOpenContract();

  const [currentAccount, setCurrentAccount] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [industry, setIndustry] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [bidAmt, setBidAmt] = useState();
  const [bidderName, setBidderName] = useState();
  const [tdrID, setTdrID] = useState();

  const [openTdrs, setOpenTdrs] = useState([]);
  const [OpenBids, setOpenBids] = useState([]);
  const [resltTdrs, setResltTdrs] = useState([]);
  const tdrsArray = [];
  const bidsArray = [];
  const resltArray = [];
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeIndustry = (e) => {
    setIndustry(e.target.value);
  };
  const handleChangeDesc = (e) => {
    setDesc(e.target.value);
  };
  const handleChangeStartTime = (e) => {
    setStartTime(e.target.value);
  };
  const handleChangeEndTime = (e) => {
    setEndTime(e.target.value);
  };
  const handleChangeBidAmt = (e) => {
    setBidAmt(e.target.value);
  };
  const handleChangeBidderName = (e) => {
    setBidderName(e.target.value);
  };

  const createTender = async () => {
    try {
      console.log(title, industry, desc, startTime, endTime);
      const sTime = Math.floor(new Date(startTime).getTime() / 1000);
      const eTime = Math.floor(new Date(endTime).getTime() / 1000);

      if (!ethereum) return alert("Please install Metamask");
      // Creates new tender using the createTender function of the contract
      const transact = await openTender.createTender(
        title,
        industry,
        desc,
        sTime,
        eTime
      );
      console.log("openTender Result: ", transact);
    } catch (error) {
      console.log(error);

      throw new Error("No Ethereum object");
    }
  };

  const loadOpenTdrs = async () => {
    const tdrCount = await openTender.getTdrCount();
    if (tdrCount > 0) {
      for (var i = 0; i < tdrCount; i++) {
        const tdrInfo = await openTender.getTdrInfo(i);
        const id = tdrInfo.id.toString();
        const title = tdrInfo.title;
        const desc = tdrInfo.desc;
        const industry = tdrInfo.industry;
        const startTime = tdrInfo.startTime;
        const endTime = tdrInfo.endTime;
        const maxBid = tdrInfo.maxBid.toString();
        const currentTime = tdrInfo.currentTime;
        const ended = currentTime > endTime;
        // Array created to store the details of each tender
        tdrsArray[i] = {
          tdrId: { id },
          tdrTitle: { title },
          tdrDesc: { desc },
          tdrIndustry: { industry },
          tdrStartTime: { startTime },
          tdrEndTime: { endTime },
          tdrMaxBid: { maxBid },
          isEnded: { ended },
        };
        if (ended) {
          const winnerInfo = await openTender.getWinningBid(i);
          const winnerName = winnerInfo.winnerName;
          const winnerAdress = winnerInfo.winnerAdress;
          const winningBidAmt = winnerInfo.winningBidAmt;
          resltArray[i] = {
            rtdrId: { id },
            rtdrTitle: { title },
            rtdrWname: { winnerName },
            rtdrWnadress: { winnerAdress },
            rtdrWnamt: { winningBidAmt },
          };
        }
      }
      // Updates available tenders list
      setOpenTdrs(tdrsArray);
      setResltTdrs(resltArray);
    } else {
      console.log("no tenders");
      console.log(tdrsArray);
    }
  };

  const placeOpenBid = async () => {
    try {
      const transact = await openTender.bid(tdrID, bidderName, {
        value: ethers.utils.parseEther(bidAmt.toString()),
      });
      console.log(transact);
    } catch (error) {
      console.log(error);

      throw new Error("No Ethereum object");
    }
  };

  const getPrevOpenBids = async () => {
    // Gets the bid details of the respective tender
    try {
      if (tdrID) {
        const count = await openTender.getBidderCountofTdr(tdrID);
        console.log("bcount", count);
        for (var i = 0; i < count; i++) {
          const bid = await openTender.getBiddersOfTdr(tdrID, i);
          console.log("bid", bid);
          const bidder = bid.biddera.toString();
          const bidderAmt = bid.bidAmt.toString();
          bidsArray[i] = {
            bidderAdr: { bidder },
            amt: { bidderAmt },
          };
        }
      }
    } catch (error) {
      console.log(error);
      throw new Error("No Ethereum object");
    }

    setOpenBids(bidsArray);
    console.log(bidsArray);
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      // Gets the accounts of the connected wallet
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
      throw new Error("No Ethereum object");
    }
  };

  const connectWallet = async () => {
    try {
      console.log("h");
      if (!ethereum) return alert("Please install Metamask");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
      console.log(currentAccount);
    } catch (error) {
      console.log(error);

      throw new Error("No Ethereum object");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    //listenAccount();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        handleChangeTitle,
        handleChangeIndustry,
        handleChangeDesc,
        handleChangeStartTime,
        handleChangeEndTime,
        createTender,
        loadOpenTdrs,
        handleChangeBidAmt,
        handleChangeBidderName,
        placeOpenBid,
        openTdrs,
        resltTdrs,
        setTdrID,
        tdrID,
        getPrevOpenBids,
        OpenBids,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
