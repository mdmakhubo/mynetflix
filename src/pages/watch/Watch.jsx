import { ArrowBackOutlined } from '@mui/icons-material'
import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import './watch.scss'

const Watch = () => {
    const location = useLocation();

    const movie = location.state.movie;

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>      
      <video src={movie.video} autoPlay={true} loop className="video" controls />      
    </div>
  )
}

export default Watch