import { EthProvider } from "./contexts/EthContext";
import Intro from "./components/Intro/";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <EthProvider>
      <div id="App" >
        <div className="container">
         <Intro />
          <hr />
          <Content />
          <hr />
         <Footer />
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
