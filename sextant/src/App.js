import "./App.css";
import Banner from "./components/banner";
import PacketLatencyComponent from "./components/PacketLatencyComponent";
function App() {
  const siteTitle = "React Test With Forage";
  return (
    <div className="app">
      <Banner title={siteTitle} />
      <div>
        <div className="container">
          <PacketLatencyComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
