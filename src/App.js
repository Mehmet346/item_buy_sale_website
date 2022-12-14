import { Routes, Route, Link, Navlink } from "react-router-dom";
import { Navbar, Footer, Left, Right } from "./components";
import { MyItems, Profile } from "./pages"

function App() {
  return (
    <div className="text-center max-h-screen">
    <Navbar/>
    <div className="flex justify-between">
      <Left/>
      <Routes>
        <Route path="/" element={<Profile/>}/>
        <Route path="/items" element={<MyItems/>}/>
      </Routes>
      <Right/>
    </div>
    
    </div>
  );
}

export default App;
