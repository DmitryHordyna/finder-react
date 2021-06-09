import React, { Component } from 'react';

//component
import imagesAPI from './services/image-api';
import Modal from './components/Modal/Modal';
import SearchBar from './components/SearchBar/SearchBar';
import Button from './components/Button/Button';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from 'react-loader-spinner';
// style
import './App.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class App extends Component {
  state = {
    currentPage: 1,
    perPage: 12,
    imageType: 'photo',
    orientation: 'horizontal',

    searcheImages: [],
    searchQuery: '',
    currentLargeImage: null,

    showModal: false,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.featchImages();
    }
    if (this.state.currentPage > 2 && this.state.isLoading) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }
  componentWillUnmount() {}

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      searcheImages: [],
      error: null,
    });
  };

  featchImages = () => {
    const { currentPage, searchQuery, imageType, perPage, orientation } =
      this.state;

    const options = {
      searchQuery,
      currentPage,
      imageType,
      perPage,
      orientation,
    };

    this.setState({ isLoading: true });

    imagesAPI
      .featchImages(options)
      .then(response => {
        this.setState(prevState => ({
          searcheImages: [...prevState.searcheImages, ...response.hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  onLoadMore = () => {
    this.featchImages();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onClickImage = e => {
    const largeImg = e.target.attributes.data.textContent;

    this.setState({ currentLargeImage: largeImg }, this.toggleModal());
  };

  render() {
    const {
      showModal,
      searcheImages,
      isLoading,
      error,
      currentLargeImage,
      searchQuery,
    } = this.state;
    const shouldRendeLoadMoreButton = searcheImages.length > 0 && !isLoading;
    return (
      <>
        <SearchBar onSubmit={this.onChangeQuery} />
        {error && <h3 className="error">Sorry error 😐 .Try again load.</h3>}
        <ImageGallery
          imagesArr={searcheImages}
          onClickImage={this.onClickImage}
        />

        {isLoading && (
          <Loader
            className="loader"
            Loader
            type="TailSpin"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={3000}
          />
        )}

        {shouldRendeLoadMoreButton && (
          <Button buttonLabel="Load more" onClick={this.onLoadMore} />
        )}

        {showModal && (
          <Modal
            onClose={this.toggleModal}
            currentLargeImage={currentLargeImage}
            searchQuery={searchQuery}
          />
        )}
      </>
    );
  }
}

export default App;
