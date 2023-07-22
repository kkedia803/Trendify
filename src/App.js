import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Beauty from './pages/Beauty';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/men" element={<Men />} />
          <Route exact path="/women" element={<Women />} />
          <Route exact path="/kids" element={<Kids />} />
          <Route exact path="/beauty" element={<Beauty />} />
          <Route exact path="/cart" element={<Cart />} />
          {/* <Route exact path="/about" element={<About />} /> */}
          {/* <Route exact path="/blogs" element={<Blogs />} /> */}
          {/* <Route exact path="/signup" element={<Signup />} /> */}
          {/* <Route exact path="/information" element={<Information />} /> */}
          {/* <Route exact path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
