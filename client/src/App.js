import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FontGallery from "./components/FontGallery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FontGallery />} />
      {/* 다른 라우트들을 여기에 추가할 수 있습니다 */}
    </Routes>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
