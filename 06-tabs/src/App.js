import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

// loading
// whole section overview
// api
// job desc
// buttons

const App = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <div className="section loading">
        <h1>loading...</h1>
      </div>
    );
  }

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
