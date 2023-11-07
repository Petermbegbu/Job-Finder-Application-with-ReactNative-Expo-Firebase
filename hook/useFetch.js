import { useState } from "react";
import DATASET from "../data";

const useFetch = (value) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const LatestJobs = DATASET.filter((dataset, i) => i < value);

  const JobList = DATASET.filter((dataset, i) => i > value && i < 15);

  return { error, isLoading, JobList, LatestJobs };
};

export default useFetch;
