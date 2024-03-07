import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'd9bcb3de';

export const useMovieSearchResults = (title: string, searchType: string, searchYears: Array<number>): any => {
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(undefined);
            const url = `http://www.omdbapi.com/?s=${title}&apikey=${API_KEY}&type=${searchType}&y=${searchYears[0]}-${searchYears[1]}`;
            console.log(url);
            try {
                const response = await axios.get(url);
                setSearchResults(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Error fetching data');
            } finally {
                setIsLoading(false);
            }
        };

        const delayDebounceFn = setTimeout(() => {
            fetchData();
          }, 3000)
        
        return () => clearTimeout(delayDebounceFn);
        
    }, [title, searchType, searchYears]);

    return [isLoading, error, searchResults];
}