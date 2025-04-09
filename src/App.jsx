import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GridView from "./Gridview";
import Todo from "./Todo";
import Navbar from "./Navbar";
import Home from "./Home";

// import Home from "./Home";
import ProfileCard from "./ProfileCard";
const Profilelist={
  name:"MADHAN KUMAR G",
  department:"AI&DS",
  year:"2",
  mobile:"9025581087",
  address:"Tenkasi",
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/profilecard" element={<ProfileCard Profilelist={Profilelist} />} />
        <Route path="/GridView" element={<GridView />} />
        <Route path="/Navbar" element={<Navbar/>}/>

       
      </Routes>
    </BrowserRouter>
  );
}

export default App;