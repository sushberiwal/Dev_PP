import React, { Component } from "react";
import "./Header.css";
class Header extends Component {
  state = {
    newMovieName: "",
  };

  handleOnChange = (e) => {
    let value = e.target.value;
    this.setState({
      newMovieName: value,
    });
  };

  handleKeyPress = (e) => {
    if (e.key == "Enter") {
      this.props.setMovies(this.state.newMovieName);
    }
  };

  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src="logo.svg" alt="" />
        </div>
        <div className="search-btn">
          <input
            className="search-movies"
            value={this.state.newMovieName}
            type="text"
            placeholder="Search"
            onChange={this.handleOnChange}
            onKeyPress={this.handleKeyPress}
          />
        </div>
      </div>
    );
  }
}

export default Header;
