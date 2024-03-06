import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'd9bcb3de';

export const useMovieSearchResults = (title: string): any => {
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(undefined);

            try {
                const response = await axios.get(`http://www.omdbapi.com/?i=${title}&apikey=${API_KEY}`);
                setSearchResults(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Error fetching data');
            } finally {
                setIsLoading(false);
            }
        };

        if (title) {
            fetchData();
        }
    }, [title]);

    return [isLoading, error, searchResults];
}