import React from "react";
import Navbar from "./Navbar";

const Eigakan = () => {
  return (
    <>
      <Navbar />
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
