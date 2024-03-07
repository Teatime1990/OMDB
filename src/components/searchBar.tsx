import React, { FC, Fragment } from 'react';
import styled from "styled-components";
import { SearchYearRangeProps } from "../utilities/scrollbarYearRange";
import ScrollbarYearRange from "../utilities/scrollbarYearRange";
import { SearchTypeProps } from "../utilities/searchRadio";
import SearchRadio from "../utilities/searchRadio";
import { SlMagnifier } from "react-icons/sl";

const SearchBarContainer = styled.div`
    background-color: #666666;
    padding: 25px 40px;
    color: #ffffff;
    .searchBar {
        display: flex;
        align-items: center;
    }
    .input-text {
        display: flex;
        flex: 0 0 50%;
        font-size: 20px;

        & > input {
            background-color: transparent;
            color: #ffffff;
            border: 0px solid;
            font-size: 20px;
            width: 80%;

            &::placeholder {
                color: #ffffff;
              }

            &:focus {
                box-shadow: 0 1px 1px #ffffff inset, 0 0 8px #c6c6c6;
                outline: 0 none;
            }
        }

        svg {
            color: #ffffff;
            padding-right: 30px;
            padding-top: 3px;
            height: 20px;
            width: 30px;
            stroke-width: 24px;
        }
    }
`;

type SearchBarProps = {
    searchText: string;
    searchTextOnChange: (text: string) => void;
    isLoading: boolean;
}

type Props = SearchYearRangeProps & SearchBarProps & SearchTypeProps;


const SearchBar: FC<Props> = ({ searchText, searchTextOnChange, searchYears, setSearchYears, searchType, searchTypeOnChange, isLoading }: Props) => {
    const onSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        searchTextOnChange(e.target.value);
    };

    return (
        <SearchBarContainer>
            <div className='searchBar'>
                <div className='input-text'>
                    {isLoading ? (
                        <span>Loading</span>
                    ) : (
                        <Fragment>
                            <SlMagnifier />
                            <input
                                type="text"
                                placeholder="Type Movie "
                                value={searchText}
                                className="search-text-input"
                                onChange={onSearchTextChange}
                            />
                        </Fragment>
                    )}
                    
                </div>
                <ScrollbarYearRange searchYears={searchYears} setSearchYears={setSearchYears} />
                <SearchRadio searchType={searchType} searchTypeOnChange={searchTypeOnChange} />
            </div>
            
        </SearchBarContainer>
    );
};

export default SearchBar;