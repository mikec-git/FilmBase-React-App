import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/ORGANISMS/MoreInfo-O/Header/Header';
import Body from '../../components/ORGANISMS/MoreInfo-O/Body/Body';
import c from './MoreInfo.module.scss';
import * as actionsProfile from '../../store/actions/ProfileActions';

class MoreInfo extends Component {
  state = { 
    activeVideoId: this.props.videoDetails.videos[0] && this.props.videoDetails.videos[0].key,
    overviewExpanded: false,
    sideDrawerExpanded: true,
    youtubeState: null,
    reviewExpanded: {},
    userRating: 0
  } 

  videoClickedHandler = (newVideoId) => {
    this.setState({ activeVideoId: newVideoId });
  };

  overviewToggleHandler = () => {
    this.setState(prevState => ({overviewExpanded: !prevState.overviewExpanded}));
  };
  
  sideDrawerToggleHandler = () => {
    this.setState(prevState => ({sideDrawerExpanded: !prevState.sideDrawerExpanded}));
  };

  youtubeStateChangeHandler = (playerState) => {
    this.setState({ youtubeState: playerState });
  }

  reviewClickedHandler = (id) => {
    if(this.state.reviewExpanded.hasOwnProperty(id)) {
      this.setState(prevState => {
        return { 
          ...this.state, 
          reviewExpanded: { 
            ...this.state.reviewExpanded, 
            [id]: !prevState.reviewExpanded[id]
          }
        };
      });
    } else {
      this.setState({ 
          ...this.state, 
          reviewExpanded: { ...this.state.reviewExpanded, [id]: true }
      });
    }
  }

  ratingMouseOverHandler = (e, rating) => {
    const targetRect  = e.target.getBoundingClientRect(),
          heartCenter = ((targetRect.left + targetRect.right)/2).toFixed(0);

    if(rating > 0 && e.pageX - heartCenter < 0) {
      rating = rating - 0.5;
    }

    if(this.state.userRating !== rating*2) {
      this.setState({ userRating: rating*2 });
    }
  }

  ratingSubmitHandler = (videoType, videoId) => {
    this.props.onSubmitRating(videoType, videoId, this.state.userRating);
  } 
  
  favoriteFilmHandler = (videoType, videoId) => {
    this.props.onFavoriteFilm(videoType, videoId);
  }

  render() {
    return ( 
      <div className={c.MoreInfo}>
        <Header 
          type={this.props.type}
          videoDetails={this.props.videoDetails}
          activeVideoId={this.state.activeVideoId}
          overviewExpanded={this.state.overviewExpanded}
          sideDrawerExpanded={this.state.sideDrawerExpanded}
          playerState={this.state.youtubeState}
          overviewToggle={this.overviewToggleHandler}
          sideDrawerToggle={this.sideDrawerToggleHandler}
          videoClicked={this.videoClickedHandler}
          youtubeStateChanged={this.youtubeStateChangeHandler}
          ratingMouseOver={this.ratingMouseOverHandler}
          userRating={this.state.userRating}
          submitRating={this.ratingSubmitHandler}
          favoriteFilm={this.favoriteFilmHandler}
          favorite={this.props.favorite} />
        <Body 
          budget={this.props.videoDetails.budget}
          revenue={this.props.videoDetails.revenue}
          staffListCast={this.props.videoDetails.cast}
          staffListCrew={this.props.videoDetails.crew}
          reviewList={this.props.videoDetails.reviews}
          isReviewExpanded={this.state.reviewExpanded}
          reviewClicked={this.reviewClickedHandler} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    favorite: state.profile.favorite
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmitRating: (type, id, rating) => dispatch(actionsProfile.submitRating(type, id, rating)),
    onFavoriteFilm: (type, id) => dispatch(actionsProfile.favoriteFilm(type, id))
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(MoreInfo);