import React from "react";

const Eigakan = () => {
  return (
    <>
      <nav className="flex justify-between items-center bg-slate-900 h-12 px-4 py-6 rounded-md mt-4">
        <div>
          <h1 className="text-xl font-bold text-slate-300">
            <span>Eiga</span>
            <span className="text-slate-500">kan</span>
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

      <main className="h-dvh flex flex-row gap-10 items-start justify-center bg-slate-800 h-vh px-10">
        <div className="bg-slate-700 p-6 rounded-lg shadow-lg w-1/2">
          <h2 className="text-2xl font-semibold text-slate-200 mb-4">
            Movie Night at EigaKan
          </h2>
          <p className="text-slate-400">Your go-to place for movie nights</p>
        </div>
        <div className="bg-slate-700 p-6 rounded-lg shadow-lg w-1/2">
          <h2 className="text-2xl font-semibold text-slate-200 mb-4">
            Movie Night at EigaKan
          </h2>
          <p className="text-slate-400">Your go-to place for movie nights</p>
        </div>
      </main>
    </>
  );
};

export default Eigakan;
