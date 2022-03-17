import logo from './logo.svg';
import './App.css';
import Header from "./layout/Header.jsx"
import Footer from "./layout/Footer.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import UserResults from "./components/UserResults.jsx"
import User from "./components/User.jsx"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {GithubProvider} from "./context/GithubContext.jsx"

function App() {
  return (
    <GithubProvider>
    <Router>
    <div className="App bodyDiv">
    <Header />
    <main>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:login" element={<User />} />

        <Route path="/about" element={<About />}/>
     </Routes>
    </main>
    <Footer />
    </div>
    </Router>
    </GithubProvider>
  );
}

export default App;
