import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/navbar.component";
import Content from "./components/Content/content.component";
import Footer from "./components/Footer/footer.component";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Content />
      <Footer />
    </Router>
  );
};

export default App;
