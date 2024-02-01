import React, { useState } from "react";

function Home({}) {
  const [flag, setFlag] = useState(false);
  const handleGetDetails = () => {
    setFlag(true);
  };
  return (
    //Displaying tenders
    <div>
      <div className="flex flex-wrap justify-center">
        <div className="max-w-sm mx-2 mb-4">
          <div className="bg-blue-500 text-white rounded-lg shadow-lg">
            <div className="px-6 py-4">
              <span className="block text-xl font-semibold">
                Tender: $index + 1
              </span>
              <p className="mt-2">
                <strong>Address:</strong> tender
              </p>
            </div>
            <div className="px-6 py-4">
              <button
                className="btn btn-blue"
                onClick={() => handleGetDetails()}
              >
                Get Details
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*Giving details of the selected tender for bidding*/}
      {flag && (
        <div
          id="modal1"
          className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center"
        >
          <div className="bg-white rounded-lg p-8 max-w-md w-80">
            <h4>details[1]</h4>
            <hr />
            <h5>Industry :</h5>
            <p>details[2]</p>
            <h5>Description :</h5>
            <p>details[3]</p>
            <h5>Bid Start Date :</h5>
            <p>details[4]</p>
            <h5>Bid End Date :</h5>
            <p>details[5]</p>
            <h5>Tender Complete :</h5>
            <p>details[6]</p>
            <div className="flex justify-between pt-4">
              <button className="btn btn-blue w-20 bg-accent">Bid</button>
              <button className="btn btn-blue w-20 bg-warning" onClick={()=> setFlag(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
