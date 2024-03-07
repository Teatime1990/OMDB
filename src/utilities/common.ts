export enum OMDBTYPE {
    Movies = 'movies',
    Series = 'series',
    Episodes = 'episodes',
    Any = '',
  }

export type Search = {
  Poster: string,
  Title: string,
  Type: string,
  Year: string,
  imdbID: string,
}

export type OMDBResults = {
  Response: boolean,
  Search: Array<Search>,
  totalResults: number,
}

type Rating = {
  Source: string,
  Value: string,
}

export type MovieDetails = {
  Actors: string,
  Awards: string,
  BoxOffice: string,
  Country: string,
  DVD: string,
  Director: string,
  Genre: string,
  Language: string,
  Metascore: string,
  Plot: string,
  Poster: string,
  Production: string,
  Rated: string,
  Ratings: Array<Rating>,
  Released: string,
  Response: boolean,
  Runtime: string,
  Title: string,
  Type: string,
  Website: string,
  Writer: string,
  Year: number,
  imdbID: string,
  imdbRating: string,
  imdbVotes: number,
}