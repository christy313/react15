import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

// job desc
// buttons

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const res = await fetch(url);
    const newJobs = await res.json();

    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

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
