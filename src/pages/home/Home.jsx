import React,{useState, useEffect} from 'react';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import List from '../../components/list/List';
import axios from 'axios';
import './home.scss';

const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`lists?${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`);
        setLists(res.data)
        // console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    getRandomLists()
  }, [type,genre])
  

  return (
    <div className="home">
        <Navbar />
        <Featured type={type} setGenre={setGenre} />
        {
          lists.map((list) => (
            <List key={list._id} list={list} />
          ))
        }
    </div>
  )
}

export default Home