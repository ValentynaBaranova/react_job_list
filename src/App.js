import React from "react";
import "@dannymichel/proxima-nova";
import JobList from "./JobList";
import JobPage from "./JobPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/job_page" element={<JobPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
