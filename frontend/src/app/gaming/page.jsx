"use client";
import React, { useEffect, useState } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

function Gaming() {
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    const fetchGamingResponse = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/gaming", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: "Hello from frontend!" }),
        });

        const data = await res.json();
        setResponseMessage(data.message); // or data.data if needed
      } catch (err) {
        console.error("Error fetching bot response:", err);
        setResponseMessage("Error communicating with bot.");
      }
    };

    fetchGamingResponse();
  }, []);

  return (
    <div>
      <h1>Welcome to the Neura Gaming Page</h1>
      <p>
        <strong>Bot says:</strong> {responseMessage}
      </p>
    </div>
  );
}

export default Gaming;
