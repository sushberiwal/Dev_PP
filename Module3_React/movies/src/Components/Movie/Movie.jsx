import React, { Component } from "react";
import { API_KEY, API_URL, IMAGE_URL } from "../../API/secrets";
import { Link } from "react-router-dom";
import "./Movie.css";
import axios from "axios";
class Movie extends Component {
  state = {
    detailedMovieObj: {},
  };

  async componentDidMount() {
    // https://api.themoviedb.org/3/movie/299534?api_key=bdd243ea847239dc0799805e63e189f0
    let response = await axios.get(
      `${API_URL}/movie/${this.props.movie.id}?api_key=${API_KEY}`
    );
    // console.log(response.data);
    let detailedMovieObj = response.data;
    let posterPath = IMAGE_URL + detailedMovieObj.poster_path;
    this.setState({
      detailedMovieObj: { ...detailedMovieObj, poster_path: posterPath },
    });
  }

  // let something = { a:"123" , b:"1231" , c:"1241" };
  //  {...something} => {a:"123" , c:"1241"  , b:"asfasf" };

  render() {
    let { poster_path, title, vote_average } = this.props.movie;
    let posterPath = IMAGE_URL + poster_path;
    return (
      <div className="movie-item">
        <div className="movie-poster">
          <Link to={{ pathname: "/moviepage", state: this.state.detailedMovieObj }}>
            <img src={posterPath} alt="" />
          </Link>
        </div>
        <div className="movie-info">
          <div className="movie-title">{title}</div>
          <div className="movie-rating">{vote_average} IMDB</div>
        </div>
      </div>
    );
  }
}

export default Movie;
