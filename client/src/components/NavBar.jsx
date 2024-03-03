import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import Sidebar from "./Icons";

function NavBar() {
  const { connectWallet, currentAccount } = useContext(TransactionContext);

  return (
    <div className="navbar h-20 pl-6 bg-base-200 ">
      <div className="flex-1">
        <h4 className="font-bold text-3xl">TenderLink</h4>
      </div>
      <div className="w-max pb-2">
        <Sidebar />
      </div>
      <div>
        {!currentAccount && (
          <button
            className="btn bg-base-100 hover:bg-base-300 font-bold "
            type="button"
            onClick={connectWallet}
          >
            CONNECT
          </button>
        )}
        {currentAccount && (
          <button
            className="btn bg-base-100  font-bold mr-1"
            type="button"
          >
            CONNECTED
          </button>
        )}
      </div>
    </div>
  );
}

export default NavBar;
