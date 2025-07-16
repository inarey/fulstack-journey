import React, { useState } from "react";
import buddies from "./data";
import List from "./List";

const BirthdayPals = () => {
  const [birthday, setBirthday] = useState(buddies);


  return (
    <main className="flex flex-col items-center justify-start bg-gradient-to-r from-purple-800 to-pink-800 py-10">
      <div className="bg-slate-800 rounded-lg p-6 shadow-lg w-11/12 max-w-2xl">
        <h3 className="text-xl text-slate-300">{birthday.length} Birthday today</h3>
      </div>
      <div className="bg-slate-800 rounded-lg p-6 shadow-lg w-11/12 max-w-2xl mt-4">
      <List birthday={birthday} />
        <button
          className="bg-purple-600 text-slate-300 px-4 py-2 rounded hover:bg-purple-700 transition-colors"
          onClick={() => setBirthday([])}
        >
          Clear All
        </button>
        </div>
    </main>
  );
};

export default BirthdayPals;
