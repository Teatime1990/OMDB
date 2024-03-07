import React, { FC } from 'react';
import styled from "styled-components";
import { Search, Rating } from '../utilities/common';
import { useGetMovieDetails } from '../hooks/getDataFromOMDbAPI';
import { FaRegBookmark } from "react-icons/fa";

const MovieDetailContainer = styled.div`
    padding: 20px 0 20px 40px;

    .details {
        display: flex;
        padding: 20px 0 30px 0;

        .details-right-side {
            padding: 0 25px;
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        & > img {
            height: 400px;
            width: 270px;
        }

        .btn {
            button {
                padding: 14px;
                background: transparent;
                border-radius: 5px;
                font-weight: 600;
                display: flex;
                margin-left: auto;
                font-size: 16px;

                svg {
                    padding-right: 16px;
                }
            }
        }

        .detail-section {
            margin-top: auto;
            .title {
                font-size: 34px;
                font-weight: 700;
            }
    
            .info {
                padding: 25px 0;
                align-items: center;
    
                .rated {
                    border: 1px solid #000000;
                    border-radius: 5px;
                    padding: 1px 10px;
                    margin-right: 8px;
                }

                .dot {
                    padding: 0 4px;
                }
            }
        }
    
    }

    .description {
        padding: 20px 20px 20px 0;
        border-top: 1px solid #666666;
        border-bottom: 1px solid #666666;
        line-height: 30px;
    }

    .ratings {
        display: grid;
        padding: 30px 0;
        grid-template-columns: 1fr 1fr 1fr;

        .item {
            padding: 5px 20px;
            text-align: center;
            display: flex;
            flex-direction: column;

            &:not(:last-child) {
                border-right: 1px solid #666666;
            }

            .sub-title {
                font-size: 14px;
                margin-top: 10px;
            }
        }
    }
`;

type MovieDetailProps = {
    movie: Search;
}

const MovieDetail: FC<MovieDetailProps> = ({ movie }: MovieDetailProps) => {
    const {isLoading, error, details} = useGetMovieDetails(movie.imdbID);

    if ( error || details == undefined ) {
        return <div>No contents</div>
    }

    return (
        <MovieDetailContainer>
                {isLoading ? (
                    <span>Loading</span>
                ) : (
                    <div className='section'>
                        <div className='details'>
                            <img src={details.Poster} />
                            <div className='details-right-side'>
                                <div className='btn'>
                                    <button><FaRegBookmark />Watchlist</button>
                                </div>
                                <div className='detail-section'>
                                    <div className='title'>
                                        {details.Title}
                                    </div>
                                    <div className='info'>
                                        <span className='rated'>
                                            {details.Rated}
                                        </span>
                                        {details.Year}
                                        <span className='dot'>&#183;</span>
                                        {details.Genre}
                                        <span className='dot'>&#183;</span>
                                        {details.Runtime}
                                    </div>
                                    <div className='actors'>
                                        {details.Actors}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='description'>
                            {details.Plot}
                        </div>
                        <div className='ratings'>
                            {details.Ratings.map(r => {
                                return (
                                    <div className='item'>
                                        <span>{r.Value}</span>
                                        <span className='sub-title'>{r.Source}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
        </MovieDetailContainer>
    );
};

export default MovieDetail;