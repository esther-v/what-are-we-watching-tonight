import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <h1>What are we watching tonight</h1>
      <Home/>
    </div>
  );
}

export default App;
