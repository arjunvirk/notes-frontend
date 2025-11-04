import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";

const App = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#111",
        backgroundImage: `
      linear-gradient(#222 1px, transparent 1px),
      linear-gradient(90deg, #222 1px, transparent 1px)
    `,
        backgroundSize: "20px 20px",
        backgroundAttachment: "fixed", // keeps it stable during scroll
        backgroundPosition: "top left",
      }}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
