import Home from "./pages/Home";
import Nav from "./components/Nav";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Nav/>
      {/* <Home/> */}
      <h2>Popular Movies - <span>Top 20</span></h2>
    </div>
  );
}

export default App;
