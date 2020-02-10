import React, { Component } from "react";
import axios from "axios";

export default class LetestPhotos extends Component {
  state = {
    photos: [],
    page: 1,
    seaching: false,
    search_query: ""
  };

  loadNextPage() {
    axios
      .get(
        `https://api.unsplash.com/photos/?client_id=e1824d55808d0348c0bfd9fcdc014795e4882b4e79d1e1a93f6ce349556dd04b&per_page=16&page=${this.state.page}`
      )
      .then(res =>
        this.setState({
          photos: res.data,
          page: this.state.page + 1
        })
      );

      window.scrollTo({
        top: 100,
        left: 100,
        behavior: 'smooth'
      });
  }

  searchTrigger(event) {

    this.setState({
      page: 1,
    })
    axios
      .get(
        `https://api.unsplash.com/search/photos/?client_id=e1824d55808d0348c0bfd9fcdc014795e4882b4e79d1e1a93f6ce349556dd04b&query=${this.state.search_query}&per_page=16&page=${this.state.page}`
      )
      .then(res =>
        this.setState({
          photos: res.data.results,
          page: this.state.page + 1,
          seaching: true,
          total_found: res.data.total,
          total_found_pages: res.data.total_pages

        })
      );

    event.preventDefault();
  }

  loadNextSearchPage() {
    axios
      .get(
        `https://api.unsplash.com/search/photos/?client_id=e1824d55808d0348c0bfd9fcdc014795e4882b4e79d1e1a93f6ce349556dd04b&query=${this.state.search_query}&per_page=16&page=${this.state.page}`
      )
      .then(res =>
        this.setState({
          photos: res.data.results,
          page: this.state.page + 1,
          seaching: true
        })
      );

      window.scrollTo({
        top: 100,
        left: 100,
        behavior: 'smooth'
      });
  }

  componentDidMount() {
    axios
      .get(
        `https://api.unsplash.com/photos/?client_id=e1824d55808d0348c0bfd9fcdc014795e4882b4e79d1e1a93f6ce349556dd04b&per_page=16&page=${this.state.page}`
      )
      .then(res =>
        this.setState({
          photos: res.data,
          page: this.state.page + 1
        })
      );

    window.scrollTo(0, 0);
  }
  searchQuery(event) {
    this.setState({
      search_query: event.target.value
    });
  }

  render() {
    let searchHeading = "";
    let nextSeachResult = "";
    let searchInfo = '';

    if (this.state.seaching === true) {
      searchHeading = `You searched with '${this.state.search_query}'`;
      nextSeachResult = <button className="btn btn-success" onClick= {this.loadNextSearchPage.bind(this)}>Load More {this.state.page}</button>;
      searchInfo = `Total Found : ${this.state.total_found} | Pages ${this.state.page - 1} of ${this.state.total_found_pages}`;
    } else {
      searchHeading = "Letest Photo";
      nextSeachResult = <button className="btn btn-success" onClick= {this.loadNextPage.bind(this)}>Load More {this.state.page}</button>;
      searchInfo = '';
    }

    console.log(this.state.photos);

    if (this.state.photos.length === 0) {
      return (
        <div className="my-auto text-center loading">
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className="row top-heading">
            <div className="col my-auto">
              <h2> {searchHeading} </h2>
              <p> {searchInfo}</p>
            </div>
            <div className="col col-auto my-auto">
              <form action="" onSubmit={this.searchTrigger.bind(this)}>
                <input
                  type="text"
                  onChange={this.searchQuery.bind(this)}
                  placeholder="Search keyword"
                  value={this.state.search_query}
                />
                <input type="submit" value="search" />
              </form>
            </div>
          </div>

          <div className="row">
            {this.state.photos.map(photo => (
              <div className="col-lg-3" key={photo.id}>
                <div className="single-photo-item">
                  <a href={`photo?id=${photo.id}`} className="d-block">
                    <div className="image-wrapper">
                      <img src={photo.urls.small} alt={photo.description} />
                    </div>
                    <div className="d-flex">
                      <div className="image-wrapper2">
                        <img
                          src={photo.user.profile_image.medium}
                          className="radius-img"
                          alt=""
                        />
                      </div>
                      <p className="cat-name my-auto ml-auto">
                        @ {photo.user.name}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="load-more-button">
                {nextSeachResult}
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}
