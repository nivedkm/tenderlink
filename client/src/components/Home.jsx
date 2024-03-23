import React, { useContext } from "react";
import backgroundImage from "../assets/tdrbg.jpg"; // Import the image file
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
      <div className=" flex flex-col justify-center items-center md:flex-row w-full h-96 mt-20 md:justify-evenly rounded-md ">
        <div className="w-full md:w-1/4 mt-10">
          <h1 className="text-5xl text-center md:text-start font-bold text-base-200 mb-4">
            Welcome to
          </h1>

          <h1 className="text-6xl text-center md:text-start font-bold text-base-100 mb-4">
            TenderLink
          </h1>

          
        </div>
        <div className=" w-full md:w-1/3  px-4 py-6rounded-lg">
          <h2 className="text-2xl text-base-200 font-semibold mb-4">
            Get Started Today
          </h2>
          <p className="text-base-200 text-xl  font-medium mb-4">
            Leveraging the power of blockchain technology, TenderLink
            revolutionizes traditional procurement processes, ensuring
            unparalleled integrity and efficiency. With our platform,
            stakeholders can effortlessly navigate tender opportunities,
            confident in the transparency, security, and fairness embedded at
            every stage. Join us on TenderLink and unlock a new era of trust and
            innovation in tender management.
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
      <div className=" w-full pb-4">
        <div className="w-full h-64 flex justify-center items-center">
          <h1 className="text-4xl text-base-300 font-bold text-center ">
            What we offers
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly ">
          <div className="backdrop-blur-sm   bg-white/50 p-4 m-8 md:m-2 rounded-md ">
            <div className="text-center mt-5">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Secure </h1>
             
            </div>
            <div className="max-w-md px-4 py-6 h-40  bg-white shadow-lg rounded-lg ">
              <p className="text-gray-600 mb-4 ">
                Implementing rigorous measures to safeguard data and
                transactions, providing users with peace of mind in every
                interaction.
              </p>
            </div>
          </div>
          <div className="backdrop-blur-sm w bg-white/50 p-4 m-8 md:m-2 rounded-md ">
            <div className="text-center mt-5">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Decentralized
              </h1>
            </div>
            <div className="max-w-md px-4 py-6 h-40 bg-white shadow-lg rounded-lg">
              <p className="text-gray-600 mb-4">
                Revolutionizing traditional processes by distributing authority
                and eliminating single points of failure, thus fostering trust
                and autonomy among participants.
              </p>
            </div>
          </div>
          <div className="backdrop-blur-sm w bg-white/50 p-4 m-8 md:m-2 rounded-md ">
            <div className="text-center mt-5">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Transparent{" "}
              </h1>
             
            </div>
            <div className="max-w-md px-4 py-6 h-40 bg-white shadow-lg rounded-lg">
              <p className="text-gray-600 mb-4">
                Providing stakeholders with clear visibility into every aspect
                of the tendering process, fostering trust and accountability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
