import React, { FC, useState } from 'react';
import { useMovieSearchResults } from '../utilities/getDataFromOMDbAPI';
import styled from "styled-components";

const SearchFromContainer = styled.div`
    display: block;
`;

const SearchForm: FC = () => {
    const [searchText, setSearchText] = useState<string>('');
    const [isLoading, error, data] = useMovieSearchResults('tt3896198');
    console.log(data);

    if(isLoading) {
        return (
            <div>
                <span>isLoading</span>
            </div>
        )
    } else if (error) {
        return (
            <div>
                <span>Can not get data</span>
            </div>
        )
    }
    return (
        <SearchFromContainer>
            <span>initi</span>
        </SearchFromContainer>
    );
};

export default SearchForm;