import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import GlobalStyles from "./components/GlobalStyles";
import { Route } from "react-router";


function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Nav/>
      <Route path={["/movie/:id", "/"]}>
        <Home/>
      </Route>
      
      <Footer/>
    </div>
  );
}

export default App;
