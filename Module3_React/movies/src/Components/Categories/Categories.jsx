import axios from "axios";
import React, { Component } from "react";
import "./Categories.css";
import {Link} from "react-router-dom";
import {
  API_URL,
  NETFLIX_ORIGINALS,
  TRENDING_NOW,
  TOP_RATED,
  ACTION_MOVIES,
  COMEDY_MOVIES,
  HORROR_MOVIES,
  ROMANCE_MOVIES,
  IMAGE_URL,
} from "../../API/secrets";

class Categories extends Component {
  state = {
    netflixOriginals: [],
    trendingNow: [],
    topRated: [],
    actionMovies: [],
    comedyMovies: [],
    horrorMovies: [],
    romanceMovies: [],
  };

  async componentDidMount() {
    let netflixOriginalsResponse = await axios.get(
      `${API_URL}${NETFLIX_ORIGINALS}`
    );
    let trendingNowResponse = await axios.get(`${API_URL}${TRENDING_NOW}`);
    let topRatedResponse = await axios.get(`${API_URL}${TOP_RATED}`);
    let actionMovies = await axios.get(`${API_URL}${ACTION_MOVIES}`);
    let comedyMovies = await axios.get(`${API_URL}${COMEDY_MOVIES}`);
    let horrorMovies = await axios.get(`${API_URL}${HORROR_MOVIES}`);
    let romanceMovies = await axios.get(`${API_URL}${ROMANCE_MOVIES}`);

    this.setState({
      netflixOriginals: netflixOriginalsResponse.data.results,
      trendingNow: trendingNowResponse.data.results,
      topRated: topRatedResponse.data.results,
      actionMovies: actionMovies.data.results,
      comedyMovies: comedyMovies.data.results,
      horrorMovies: horrorMovies.data.results,
      romanceMovies: romanceMovies.data.results,
    });
  }

  render() {
    let movieGenres = [
      { genre: "Netflix Originals", stateName: "netflixOriginals" },
      { genre: "Trending Now", stateName: "trendingNow" },
      { genre: "Top Rated", stateName: "topRated" },
      { genre: "Action Movies", stateName: "actionMovies" },
      { genre: "Comedy Movies", stateName: "comedyMovies" },
      { genre: "Horror Movies", stateName: "horrorMovies" },
      { genre: "Romance Movies", stateName: "romanceMovies" },
    ];
    return (
      <div className="movie-rows">
        {movieGenres.map((genre) => {
          return (
            <div className="genre-row">
              <h2>{genre.genre}</h2>
              <div className="movie-row-list">
                {this.state[genre.stateName].map((movieObj) => {
                  return (
                      <img src={IMAGE_URL + movieObj.poster_path} alt="" />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Categories;
