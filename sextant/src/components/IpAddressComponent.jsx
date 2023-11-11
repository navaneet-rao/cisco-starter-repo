import React, { useState, useEffect } from "react";

const IpAddressComponent = ({ ipVersion }) => {
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api64.ipify.org?format=json&${ipVersion}`
        );
        const data = await response.json();
        setIpAddress(data.ip);
        console.log(data);
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    };

    fetchData();
  }, [ipVersion]);

  return (
    <div>
      <h2>
        Your {ipVersion === "ipv6" ? "IPv6" : "IPv4"} Address: {ipAddress}
      </h2>
    </div>
  );
};

export default IpAddressComponent;
