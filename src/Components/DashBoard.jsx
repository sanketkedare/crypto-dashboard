import React from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import GraphComponent from "./Graph/GraphComponent";
import PortFollioComponent from "./Portfollio/PortFollioComponent";
import Market from "./MarketCap/Market";

// Main Component 

const DashBoard = () => {
  return (
    <div>
      <Navbar />
      <div id="cryptobody" className="lg:flex lg:w-[95%] mt-2 m-auto">
        
        {/* Body */}
        <section className="lg:w-3/4 p-3">
          <Header />
          <GraphComponent />
          <PortFollioComponent />
        </section>

        {/* Market Cap */}
        <section className="lg:w-1/4 p-3">
          <Market />
        </section>
      </div>
    </div>
  );
};

export default DashBoard;
