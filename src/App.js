import "./App.css";
import GraphComponent from "./Components/Graph/GraphComponent";
import Header from "./Components/Header/Header";
import Market from "./Components/MarketCap/Market";
import Navbar from "./Components/Navbar";
import PortFollioComponent from "./Components/Portfollio/PortFollioComponent";

function App() {
  return (
    <div>
      <Navbar/>
      <div id="cryptobody"className="lg:flex lg:w-[95%] mt-2 m-auto">

        {/* Body */}
        <div className="lg:w-3/4 p-3">
          <Header/>
          <GraphComponent />
          <PortFollioComponent />
        </div>

        {/* Market Cap */}
        <div className="lg:w-1/4 p-3">
          <Market />
        </div>

      </div>
    </div>
  );
}

export default App;
