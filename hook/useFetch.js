import { useState } from "react";
import DATASET from "../data";

const useFetch = (value, jobId, searchValue) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  let LatestJobs = [];
  let JobList = [];
  let JobSearchList = [];
  let jobDetail = {};

  if (value) {
    LatestJobs = DATASET.filter((dataset, i) => i < value);
    JobList = DATASET.filter((dataset, i) => i > value && i < 15);
  }

  if (searchValue) {
    JobSearchList = DATASET.filter((dataset) =>
      dataset.JobTitle.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (JobSearchList.length == 0) {
      JobSearchList = DATASET.filter((dataset) =>
        dataset.WorkType.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
  }

  if (jobId) {
    const data = DATASET.filter((dataset) => dataset.JobId === jobId);
    jobDetail = { ...data[0] };
  }

  return { error, isLoading, JobList, LatestJobs, jobDetail, JobSearchList };
};

export default useFetch;
