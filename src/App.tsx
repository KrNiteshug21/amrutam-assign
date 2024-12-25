import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import DoctorPage from "./components/doctors/DoctorPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<DoctorPage />} />
      </Routes>
    </>
  );
}

export default App;
