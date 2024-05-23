import { useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Moviecard from "./components/Moviecard";
import Movielist from "./components/Movielist";
import NavBar from "./components/Navbar";
import { Input } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Description from "./components/Description";

function App() {
  const [isAdding, setIsAdding] = useState(false);
  return (
    <>
      <div>
        <NavBar setIsAdding={setIsAdding} isAdding={isAdding} />
        <Routes>
          <Route
            path="/"
            element={
              !isAdding ? (
                <Movielist />
              ) : (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Add />
                </div>
              )
            }
          />
          <Route path="/description/:id" element={<Description />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
