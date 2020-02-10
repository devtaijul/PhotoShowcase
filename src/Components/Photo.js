import React, { Component } from "react";
import axios from "axios";

export default class Photo extends Component {
  state = {
    photo: []
  };

  componentDidMount() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let photo_id = params.get("id");

    axios
      .get(
        `https://api.unsplash.com/photos/${photo_id}/?client_id=e1824d55808d0348c0bfd9fcdc014795e4882b4e79d1e1a93f6ce349556dd04b`
      )
      .then(res =>
        this.setState({
          photo: res.data
        })
      );
  }

  render() {


    return (
      <div>
        
      </div>
    );
  }
}
