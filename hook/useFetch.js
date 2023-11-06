import { useState } from "react";
import DATASET from "../data";

const useFetch = (value) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const filteredJobsList = DATASET.filter((dataset, i) => i < value);

  const JobList = filteredJobsList;

  return { error, isLoading, JobList };
};

export default useFetch;
