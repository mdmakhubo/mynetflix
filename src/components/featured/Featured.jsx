import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './featured.scss';

const Featured = ({type, setGenre}) => {
  const [content, setContent] = useState({})

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`);
        setContent(res.data[0])
      } catch (error) {
        console.log(error);
      }
    }  
    
    getRandomContent();

  }, [type])
  

    const genreList = [
        {value: "adventure", title: "Adventure"},
        {value: "comedy", title: "Comedy"},
        {value: "crime", title: "Crime"},
        {value: "fantasy", title: "Fantasy"},
        {value: "historical", title: "Historical"},
        {value: "horror", title: "Horror"},
        {value: "romance", title: "Romance"},
        {value: "sci-fi", title: "Sci-fi"},
        {value: "thriller", title: "Thriller"},
        {value: "western", title: "Western"},
        {value: "drama", title: "Drama"},
        {value: "documentary", title: "Documentary"}
        
    ];

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" || type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre" onChange={(e) => setGenre(e.target.value)}>
            <option>Genre</option>
            {
                genreList.map((genre,index) => (
                    <option key={index} value={genre.value}>{genre.title}</option>
                ))
            }
          </select>
        </div>
      )}
      <img
        src={content.img}
        alt=""
      />
      <div className="info">
        {/* <img
          src={content.imgTitle}
          alt="img-title"
        /> */}
        <span className="desc">
            {content.desc}
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured