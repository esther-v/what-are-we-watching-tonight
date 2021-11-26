import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Nav/>
      {/* <Home/> */}
      <Footer/>
    </div>
  );
}

export default App;
