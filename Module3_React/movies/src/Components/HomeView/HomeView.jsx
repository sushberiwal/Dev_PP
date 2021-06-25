import axios from "axios";
import React, { Component } from "react";
import Categories from "../Categories/Categories";
import "./HomeView.css";
import {
  API_URL,
  NETFLIX_ORIGINALS,
  TRENDING_NOW,
  IMAGE_URL,
} from "../../API/secrets";

class HomeView extends Component {
  state = {
    bannerMovie: {},
  };

  async componentDidMount() {
    let response = await axios.get(`${API_URL}${TRENDING_NOW}`);
    let data = response.data.results;
    let randomNumber = Math.floor(Math.random() * 10);
    let randomMovie = data[randomNumber];
    this.setState({
      bannerMovie: randomMovie,
    });
  }

  render() {
    let { poster_path, original_name, title, overview } = this.state.bannerMovie;
    let bannerTitle = title ? title : original_name;
    let posterPath = IMAGE_URL + poster_path;
    return (
      <div className="homeview">
        <div className="homeview-banner">
          <div className="homeview-banner-poster">
            <img src={posterPath}></img>
          </div>
          <div className="homeview-details">
            <div className="homeview-title">
              <h1>{bannerTitle}</h1>
            </div>
            <h1 className="homeview-overview">{overview}</h1>
          </div>
          <div className="banner-fade"></div>
        </div>
        <Categories></Categories>
      </div>
    );
  }
}

export default HomeView;
