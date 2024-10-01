import { useState, useEffect } from 'react';
import { fetchHandler } from './api';

const useFetch = (url, dependencies = []) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortController = new AbortController();

        const fetchData = async () => {
            try {
                const fetchedData = await fetchHandler(url, abortController.signal);
                setData(fetchedData);
                setIsLoading(false);
                setError(null);
            } catch (err) {
                if (err.name === "AbortError") {
                    console.log("Abort error");
                } else {
                    setError(err.message);
                    setIsLoading(false);
                }
            }
        };
        fetchData();
        return () => { abortController.abort(); };
    }, [url, ...dependencies]); // eslint-disable-line react-hooks/exhaustive-deps

    return { isLoading, data, error };

};

export default useFetch;