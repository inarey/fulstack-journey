import React from "react";

const Navbar = () => {

  return (
    <>
      <nav className="flex justify-between items-center bg-slate-900 h-12 px-4 py-6 rounded-md mt-4">
        <div>
          <h1 className="text-xl font-bold text-slate-300">
            <span>Eiga</span>
            <span className="text-slate-400">kan</span>
          </h1>
        </div>
        <input
          type="text"
          className="bg-slate-800 text-slate-100 placeholder-slate-400 rounded-md px-4 py-1 focus:outline-none focus:ring-2 focus:ring-slate-500"
          placeholder="search movies..."
        />
        <div className="text-slate-300 text-md">
          <p>
            <strong>Found</strong> results
          </p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
