import React, { FC, useState } from 'react';
import styled from "styled-components";
import { OMDBResults, Search } from '../utilities/common';
import MovieThumbnail from '../components/movieThumbnail';
import MovieDetail from '../components/movieDetail';

const SearchContentsContainer = styled.div`
    .movies-list-container {
        display: flex;

        .movies-list {
            flex: 0 0 40%;
            border-right: 1px solid #666666;
            overflow-y: auto;
            white-space: nowrap;
            height: 92vh;
            position: relative;

            &::-webkit-scrollbar {
                width: 14px;
            }
            
            &::-webkit-scrollbar-thumb {
                background: #c6c6c6;
            }

            &::-webkit-scrollbar-track {
                background: #f1f1f1;
            }
            
            .total-result,
            .no-results {
                padding: 35px 40px;
            }

            .selected {
                background-color: #f1f1f1;
            }
        }

        .movies-details {
            flex: 0 0 60%;
        }

        .item {
            &:hover {
                background-color: #f1f1f1;
            }
        }
    }
`;

type SearchContentsProps = {
    results: OMDBResults | undefined;
}

const SearchContents: FC<SearchContentsProps> = ({ results }: SearchContentsProps) => {

    const [selectedMovie, setSelectedMovie] = useState<Search>();
    const contentsData = results;

  const handleMovieSelection = (selected: Search) => {
    setSelectedMovie(selected);
  };

    return (
        <SearchContentsContainer>
            <div className="movies-list-container">
                <div className="movies-list">
                    <div className='total-result'>{contentsData?.totalResults ?? 0} RESULTS</div>
                    {contentsData !== undefined && contentsData.Search?.length > 0 ? (
                        contentsData.Search.map((o) => (
                            <div key={o.imdbID} onClick={() => handleMovieSelection(o)} 
                                className={o.imdbID === selectedMovie?.imdbID ? 'selected item' : 'item'}>
                                <MovieThumbnail movie={o}></MovieThumbnail>
                            </div>
                        ))
                    ) : (
                        <div className='no-results'>No Contents</div> 
                    )}
                </div>
                <div className="movies-details">
                    {selectedMovie && (
                        <MovieDetail movie={selectedMovie} />
                    )}
                </div>
            </div>
        </SearchContentsContainer>
    );
};

export default SearchContents;