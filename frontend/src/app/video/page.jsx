"use client";

import { useEffect, useState } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

function Video() {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");

  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    const fetchVideoResponse = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/video", {
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

    fetchVideoResponse();
  }, []);

  const handleSummarize = async () => {
    const res = await fetch("/api/summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });
    const data = await res.json();
    setSummary(data.summary);
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        placeholder="Enter YouTube video URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="border p-2 rounded w-80"
      />
      <button
        onClick={handleSummarize}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Summarize Video
      </button>
      {summary && <p className="mt-4 text-gray-200">{summary}</p>}
      <p>
        <strong>Bot says:</strong> {responseMessage}
      </p>
    </div>
  );
}

export default Video;
