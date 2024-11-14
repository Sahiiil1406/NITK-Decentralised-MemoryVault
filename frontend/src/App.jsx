import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import MemoryForm from "./components/Forms";
import MemoryVaultLanding from "./components/Landing";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<MemoryVaultLanding />} />
          <Route path="/card" element={<Card />} />
          <Route path="/memoryform" element={<MemoryForm />} />
        </Routes>
        </BrowserRouter>
      
      </div>
    </>
  );
}

export default App;
