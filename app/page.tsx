"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 to-gray-400">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Enter your name</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            className="text-black w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            placeholder="Enter your name" 
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button type="submit" className="w-full bg-indigo-600 text-white p-3 rounded hover:bg-indigo-500 transition duration-300">
            Predict data
          </button>
        </form>
      </div>
    </div>
  );
}
