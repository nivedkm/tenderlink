import React from "react";

function NavBar() {
  return (
    <div className="navbar pl-6 bg-secondary bg-opacity-80">
      <div className="flex-1">
        <h4 className="font-bold text-3xl">TenderLink</h4>
      </div>

      <div>
        <button
          className="btn bg-base-100 hover:bg-primary font-bold mr-1' type='button'"
          type="button"
        >
          CONNECT
        </button>
      </div>
    </div>
  );
}

export default NavBar;
