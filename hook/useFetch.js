import { useState, useEffect } from "react";
import axios from "axios";

import { RAPID_API_KEY } from "@env";

const rapiApiKey = RAPID_API_KEY;

const useFetch = ( endpoint, query ) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const options = {
		method: "GET",
		url: `https://jsearch.p.rapidapi.com/${endpoint}`,
		headers: {
			"X-RapidAPI-Key": '5d1507ef10mshed275cdcb034384p17fbc9jsn519d90c515ca',
			"X-RapidAPI-Host": "jsearch.p.rapidapi.com",
		},
		params: {
			...query,
		},
	};

	const fetchData = async () => {
		setIsLoading(true);
    try {
      const response = await axios.request
        (options);
      setData(response.data.data)
      setIsLoading(false)
    } catch (error) {
      setError(error)
      console.log(error)
      alert('There is an error')
    } finally {
      setIsLoading(false)
		}
  };
  
  useEffect(() => {
    fetchData()
  }, []);

  const refetch = () => {
    setIsLoading(true)

    fetchData()
  }
  
  return {data, isLoading, error, refetch};

};

export default useFetch;