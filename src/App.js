import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Ministries from "./components/Ministries";
import PastoralTeam from "./components/PastoralTeam";
import Sermons from "./components/Sermons";
import Contact from "./components/Contact";
import Give from "./components/Give";
import Footer from "./components/Footer";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";
import DepartmentalMinistries from "./components/DepartmentalMinistries";
import CommitteesMinistry from "./components/CommitteesMinistry";
import FamiliesMinistry from "./components/FamiliesMinistry";
// import { UserContextProvider } from "./UserContext";

function App() {
  return (
    <div className="App">
      <Navbar />
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Ministries" element={<Ministries />} />
          <Route path="/Pastoral" element={<PastoralTeam />} />
          <Route path="/Sermons" element={<Sermons />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Sermons" element={<Sermons />} />
          <Route path="/Give" element={<Give />} />
          <Route path="/Sermons" element={<Sermons />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/Departmental" element={<DepartmentalMinistries />} />
          <Route path="/Committees" element={<CommitteesMinistry />} />
          <Route path="/Families" element={<FamiliesMinistry />} />

          {/* <Route index element={<IndexPage />} /> */}
        </Routes>
      </UserContextProvider>
      <Footer />
    </div>
  );
}

export default App;
