import React, { useState } from "react";
import "@dannymichel/proxima-nova";
import JobList from "./JobList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobPage from "./JobPage";

function App(props) {
  const [listForPage, setListForPage] = useState([]);
  console.log(listForPage);

  const updateData = (value) => {
    setListForPage(value);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<JobList updateData={updateData} />}>
            <Route path="/:id" element={<JobList />} />
          </Route>

          <Route
            path="/job_page/"
            element={<JobPage listForPage={listForPage} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
