import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

// loading
// whole section overview
// api
// job desc
// buttons

const App = () => {
  return (
    <div>
      <section className="section">
        <div className="title">
          <h1>experiences</h1>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          {/* buttons */}
          <article className="job-info"></article>
        </div>
      </section>
    </div>
  );
};

export default App;
