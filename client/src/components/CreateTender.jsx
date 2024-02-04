import React from "react";

function LabelInput({ htmlFor, label, type }) {
  return (
    <div className="relative">
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        id={htmlFor}
        type={type}
        className="w-full bg-base-200 border-neutral focus:border-primary px-4 py-2"
      />
    </div>
  );
}

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
                <LabelInput
                  htmlFor="tenderTitle"
                  label="Tender Title"
                  type="text"
                />
              </div>
              <div>
                <LabelInput htmlFor="industry" label="Industry" type="text" />
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
                ></textarea>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <LabelInput
                  htmlFor="bidO"
                  label="Bid Open Date"
                  type="datetime-local"
                />
              </div>
              <div>
                <LabelInput
                  htmlFor="bidC"
                  label="Bid Close Date"
                  type="datetime-local"
                />
              </div>
            </div>

            <div className="pt-8">
              <button
                type="submit"
                className="btn bg-primary"
                onSubmit={() => handleSubmit()}
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
