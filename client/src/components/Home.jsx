import React, { useContext } from "react";
import backgroundImage from "../assets/home.jpeg"; // Import the image file
import { TransactionContext } from "../context/TransactionContext";

function Home() {
  const { connectWallet, currentAccount } = useContext(TransactionContext);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="backdrop-blur-sm w bg-white/30 rounded-md ">
        <div className="text-center mt-5">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to TenderLink
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your gateway to seamless tendering processes
          </p>
        </div>
        <div className="max-w-md px-4 py-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get Started Today
          </h2>
          <p className="text-gray-600 mb-4">
            TenderLink offers a comprehensive platform to streamline your tender
            processes. From creating tenders to evaluating proposals, we've got
            you covered.
          </p>
          {currentAccount ? (
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Connected{" "}
            </button>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
              onClick={connectWallet}
            >
              Connect{" "}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
