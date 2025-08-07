"use client";
import React, { useEffect, useState } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

function Bot() {
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    const fetchBotResponse = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/bot`, {
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

    fetchBotResponse();
  }, []);

  return (
    <div>
      <h1>Welcome to the Neura Bot</h1>
      <p>Enjoy your chat experience with the bot!</p>
      <p>
        <strong>Bot says:</strong> {responseMessage}
      </p>
    </div>
  );
}

export default Bot;
