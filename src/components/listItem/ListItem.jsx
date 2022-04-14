import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import axios from 'axios';
import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './listItem.scss';

const ListItem = ({index, item}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(() => {
      const getMovie = async () => {
        try {
          const res = await axios.get("/movies/find/"+item);
          // console.log(res);
          setMovie(res.data);
        } catch (error) {
          console.log(error);
        }
      }
    
      getMovie()
      
    }, [item])
  
    
  return (
    <Link to="/Watch" state={{ movie }}>
        <div 
          className="listItem" 
          style={{ left: isHovered && index * 250 - 50 + index * 5 }}
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
          src={movie?.img}
          alt="itemImg"
        />
        {
            isHovered && (
                <>
                  <video src={movie?.trailer} autoPlay={true} loop />
                  <div className="itemInfo">
                      <div className="icons">
                          <PlayArrow className="icon" />
                          <Add className="icon" />
                          <ThumbUpAltOutlined className="icon" />
                          <ThumbDownAltOutlined className="icon" />
                      </div>
                      <div className="itemInfoTop">
                          <span>{movie?.duration}</span>
                          <span className="limit">+{movie?.limit}</span>
                          <span>{movie?.year}</span>
                      </div>
                      <div className="desc">
                          {movie?.desc}
                      </div>
                      <div className="genre">{movie?.genre}</div>
                  </div>
                </>
            )
        }
      </div>
    </Link>
  )
}

export default ListItem