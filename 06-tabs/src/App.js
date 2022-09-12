import React, { useState, useEffect } from "react";
import Title from "./components/Title";
import Loading from "./components/Loading";
import CompanyButtons from "./components/CompanyButtons";
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

  if (loading) return <Loading />;

  const { title, company, dates, duties } = jobs[jobIndex];

  return (
    <section className="section">
      <Title />
      <div className="jobs-center">
        <CompanyButtons
          jobs={jobs}
          jobIndex={jobIndex}
          setJobIndex={setJobIndex}
        />
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
