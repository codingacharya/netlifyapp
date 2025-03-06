import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("Welcome to My Netlify Project!");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-blue-600">{message}</h1>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700"
        onClick={() => setMessage("Hello, Netlify!")}
      >
        Click Me
      </button>
    </div>
  );
}
