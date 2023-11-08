import { useState } from "react";
import DATASET from "../data";

const useFetch = (value, jobId) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  let LatestJobs = [];
  let JobList = [];
  let jobDetail = {};

  if (value) {
    LatestJobs = DATASET.filter((dataset, i) => i < value);
    JobList = DATASET.filter((dataset, i) => i > value && i < 15);
  }

  if (jobId) {
    const data = DATASET.filter((dataset) => dataset.JobId === jobId);
    jobDetail = { ...data[0] };
  }

  return { error, isLoading, JobList, LatestJobs, jobDetail };
};

export default useFetch;
