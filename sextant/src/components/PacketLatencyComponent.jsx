import React, { useState, useEffect } from "react";
import WebSocket from "react-websocket";

const PacketLatencyComponent = () => {
  const [latency, setLatency] = useState(null);

  const handleData = (data) => {
    const packetTimestamp = JSON.parse(data).timestamp;
    const currentTimestamp = Date.now();
    const currentLatency = currentTimestamp - packetTimestamp;
    setLatency(currentLatency);
  };

  useEffect(() => {
    // You can perform any setup or cleanup here if needed.
    return () => {
      // Cleanup logic (e.g., close the websocket connection).
    };
  }, []);

  return (
    <div>
      <h2>Packet Latency:</h2>
      <p>{latency !== null ? `${latency} ms` : "Waiting for data..."}</p>

      <WebSocket
        url="ws://localhost:55455"
        onMessage={handleData}
        reconnect={true}
      />
    </div>
  );
};

export default PacketLatencyComponent;
