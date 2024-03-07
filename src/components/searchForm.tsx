import React, { FC, useState } from 'react';
import { useMovieSearchResults } from '../hooks/getDataFromOMDbAPI';
import styled from "styled-components";
import SearchBar from "../components/searchBar";
import SearchContents from "../components/searchContents";

const SearchFromContainer = styled.div`
    display: block;
`;

const SearchForm: FC = () => {
    
    const [searchText, setSearchText] = useState<string>('');
    const [searchYears, setSearchYears] = useState<Array<number>>([1940, 2015]);
    const [searchType, setSearchType] = useState<string>('');
    const {isLoading, error, omdbResults} = useMovieSearchResults(searchText, searchType, searchYears);

    if (error) {
        return (
            <div>
                <span>Can not get data</span>
            </div>
        )
    }
    
    return (
        <SearchFromContainer>
            <SearchBar searchText={searchText} searchTextOnChange={setSearchText} 
                       searchYears={searchYears} setSearchYears={setSearchYears} 
                       searchType={searchType} searchTypeOnChange={setSearchType}
                       isLoading={isLoading}/>
            <SearchContents results={omdbResults}/>

        </SearchFromContainer>
    );
};

export default SearchForm;