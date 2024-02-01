import React from "react";

function CreateTender() {
  return (
    <div>
      <div className="createTender">
    <div className="text-center pt-10">
        <h4 className="text-2xl font-bold">CREATE TENDER</h4>
    </div>
    <div className="container mx-auto pt-10">
        <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <div className="relative">
                        <label htmlFor="tenderTitle" className="block text-sm font-medium text-gray-700">Tender Title</label>
                        <input id="tenderTitle" type="text" className="w-full bg-base-200 border-neutral focus:border-primary px-4 py-2" name="tenderTitle" />
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Industry</label>
                        <input id="industry" type="text" className="w-full bg-base-200 border-neutral focus:border-primary px-4 py-2" name="industry" />
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="relative">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea id="description" className="w-full bg-base-200 border-neutral focus:border-primary px-4 py-2 resize-none" name="description"></textarea>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                    <div className="relative">
                        <label htmlFor="bidO" className="block text-sm font-medium text-gray-700">Bid Open Date</label>
                        <input name="bidO" id="bidO" type="datetime-local" className="w-full bg-base-200 border-neutral focus:border-primary px-4 py-2" />
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <label htmlFor="bidC" className="block text-sm font-medium text-gray-700">Bid Close Date</label>
                        <input name="bidC" id="bidC" type="datetime-local" className="w-full bg-base-200 border-neutral focus:border-primary px-4 py-2" />
                    </div>
                </div>
            </div>
            <div className="pt-8">

            <button
              type="submit"
              className="btn bg-primary"
            >
              Submit
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTender;
