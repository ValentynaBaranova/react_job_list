import React from "react";
import "@dannymichel/proxima-nova";
import JobList from "./JobList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobPage from "./JobPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/job_page" element={<JobPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
