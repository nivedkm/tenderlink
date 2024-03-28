import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

function CreateTender() {
  const {
    handleChangeTitle,
    handleChangeDesc,
    handleChangeStartTime,
    handleChangeEndTime,
    handleChangeIndustry,
    createTender,
    Loading
  } = useContext(TransactionContext);

  return (
    <div>
      <div className=" p-5">
        <div className="w-full text-center pt-10 pb-10">
          <h1 className="font-bold text-4xl">Create Tender</h1>
        </div>
        <div className="container shadow-md mx-auto p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <label
                htmlFor="tenderTitle"
                className="block text-sm font-medium text-gray-700"
              >
                Tender Title
              </label>
              <input
                id="tenderTitle"
                type="text"
                className="w-full bg-base-200 border-neutral focus:border-primary px-4 py-2"
                onChange={handleChangeTitle}
              />
            </div>
            <div className="relative">
              <label
                htmlFor="industry"
                className="block text-sm font-medium text-gray-700"
              >
                Industry
              </label>
              <input
                id="industry"
                type="text"
                className="w-full bg-base-200 border-neutral focus:border-primary px-4 py-2"
                onChange={handleChangeIndustry}
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="relative">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                className="w-full bg-base-200 border-neutral focus:border-primary px-4 py-2 resize-none"
                name="description"
                onChange={handleChangeDesc}
              ></textarea>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="relative">
              <label
                htmlFor="bidO"
                className="block text-sm font-medium text-gray-700"
              >
                Bid Open Date
              </label>
              <input
                id="bidO"
                type="datetime-local"
                className="w-full bg-base-200 border-neutral focus:border-primary px-4 py-2"
                onChange={handleChangeStartTime}
              />
            </div>
            <div className="relative">
              <label
                htmlFor="bidC"
                className="block text-sm font-medium text-gray-700"
              >
                Bid Close Date
              </label>
              <input
                id="bidC"
                type="datetime-local"
                className="w-full bg-base-200 border-neutral focus:border-primary px-4 py-2"
                onChange={handleChangeEndTime}
              />
            </div>
          </div>
          <div className="pt-8">
            <button className="btn hover:bg-success" onClick={createTender} disabled={Loading}>
              {Loading ? "Creating..." : "Create Tender"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTender;
