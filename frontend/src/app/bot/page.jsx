"use client";
import React, { useEffect, useState } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

function Bot() {
  const [responseMessage, setResponseMessage] = useState("");

  // useEffect(() => {
  //   const fetchBotResponse = async () => {
  //     try {
  //       const res = await fetch(`${BASE_URL}/api/bot`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ message: "Hello from frontend!" }),
  //       });

  //       const data = await res.json();
  //       setResponseMessage(data.message); // or data.data if needed
  //     } catch (err) {
  //       console.error("Error fetching bot response:", err);
  //       setResponseMessage("Error communicating with bot.");
  //     }
  //   };

  //   fetchBotResponse();
  // }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-screen mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-black">Bot Chat Interface</h1>

      {/* Example content to demonstrate scrolling */}
      {Array.from({ length: 50 }).map((_, i) => (
        <p key={i} className="py-3">
          This is scrollable content line #{i + 1}. The parent tag is handling
          the scroll behavior.
        </p>
      ))}
    </div>
  );
}

export default Bot;
