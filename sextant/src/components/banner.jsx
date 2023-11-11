import React from "react";
import "../styles/banner.css";
import IpAddressComponent from "./IpAddressComponent";
function Banner({ title }) {
  return (
    <div className="site-banner">
      <div className="banner">
        <h1>{title}</h1>
      </div>
      <div className="exhibit">
        <h2>Exhibit Title</h2>
        <p>This is the content of the exhibit component.</p>
        <div>
          <div className="container">
            <IpAddressComponent ipVersion="ipv4" />
          </div>
          <div className="container">
            <IpAddressComponent ipVersion="ipv6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
