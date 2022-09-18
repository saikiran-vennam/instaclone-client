import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Post from './postView'

const Insta = () => {
  const [user, setUser] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      axios.get('https://instaclone-serving.herokuapp.com/post')
        .then(res => {
          res.data.reverse();
          setUser(res.data);
          setIsPending(false);
        });
    }, 1200);
  }, [])

  return (
    <div className="Insta" >
      { isPending && <div className='Load'>Loading...</div>}
      { user && <Post  data = {user}/>}
    </div>
  )
}


  
  export default Insta;