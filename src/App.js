import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;
