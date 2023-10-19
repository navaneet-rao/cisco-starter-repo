
import "./App.css";
import Banner from "./components/banner";

function App() {
  const siteTitle = "React Test With Forage";
  return (
    <div className="app">
      <Banner title={siteTitle} />
    </div>
  );
}

export default App;
