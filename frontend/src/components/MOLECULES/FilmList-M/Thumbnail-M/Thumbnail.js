import React from 'react';
import { Link } from 'react-router-dom';
import FilmImage from '../../../ATOMS/Shared-A/FilmImage-A/FilmImage';
import Hearts from '../../../ATOMS/Shared-A/Hearts-A/Hearts';
import Rating from '../../../ATOMS/Shared-A/Rating-A/Rating';
import Title from '../../../ATOMS/Shared-A/Title-A/Title';
import c from './Thumbnail.module.scss';

const thumbnail = (props) => {
  // REGEX FOR VIDEO TYPE NAME
  const videoType = /\w+/ig.exec(props.pathBase);
  console.log(props.title);
  return (
    <div className={c.Thumbnail}>
      <Link 
        to={{
          pathname: props.pathBase + props.videoId,
          state: { modal: true, type: videoType[0] }
        }}
        className={c.Thumbnail__Item}
        onClick={() => props.showVideo(props.videoId)}>
        <FilmImage
          context='thumbnail'
          className={c.Thumbnail__Img}
          imgSrc={props.image}
          imgAlt={props.title} />
        <div className={c.Thumbnail__Rating}>
          <Hearts
            context='thumbnail'
            rating={props.rating} />
          <Rating
            context='thumbnail'
            rating={props.rating} />
        </div>
      </Link>
      <Title
        context='thumbnail'
        title={props.title} />
    </div>
  );
}
 
export default thumbnail;