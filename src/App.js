import Nav from "./components/Nav"
import Landing from "./components/Landing"
import Highlights from "./components/Highlights"
import Featured from "./components/Featured"
import Discounted from "./components/Discounted";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./pages/Home";
import Books from "./pages/Books";
import {books} from "./data"
import BookInfo from "./pages/BookInfo";

function App() {
  return (
    <Router> 
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route path="/books/1" render={() => <BookInfo books={books} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
