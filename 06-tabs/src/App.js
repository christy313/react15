import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [jobIndex, setJobIndex] = useState(0);

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
      <section className="section loading">
        <h1>loading...</h1>
      </section>
    );
  }

  const { title, company, dates, duties } = jobs[jobIndex];

  return (
    <section className="section">
      <div className="title">
        <h2>experiences</h2>
        <div className="underline"></div>
      </div>
      <div className="job-center">
        <div className="btn-container">
          {jobs.map((job, index) => (
            <button
              className={`job-btn ${index === jobIndex && "active-btn"}`}
              onClick={() => setJobIndex(index)}
              key={job.id}
            >
              {job.company}
            </button>
          ))}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => (
            <div key={index} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{duty}</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};

export default App;
