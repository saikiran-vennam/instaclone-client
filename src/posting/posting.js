import './posting.css'
import React, {useState} from "react"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Header from '../Header';

function Posting() {
    const [image, setImage] = useState('');
    const [author, setAuthor] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [fileName, setFileName] = useState('No file choosen');
    
    const handleAuth = (event) => {
        setAuthor(event.target.value)
    }
    const handleLoc = (event) => {
        setLocation(event.target.value)
    }
    const handleDesc = (event) => {
        setDescription(event.target.value)
    }
    let history = useNavigate()

    const posted = async (e) => {
        const post = new FormData()
        post.append('image', image)
        post.append('author', author)
        post.append('location', location)
        post.append('description', description)
        alert("Please Wait...")
        await axios.post("https://instaclone-serving.herokuapp.com/post", post)
        .then(res => alert(res.data.message));
        history('/InstaPage');
    }

    
    return (
        <>
        <Header/>
        <div className='main5'>
        <div className="posting">
        <div className='top'>
        <input onChange={(e) => {
                        setFileName(e.target.value.split("\\").pop())
                        setImage(e.target.files[0])
                    }
                    }
                        type="file" name="PostImage" id="file" class="inputfile" style={{ display: "none" }} />
                    <p  style={{ display: 'inline-block' }} >{fileName}</p> &nbsp;&nbsp;
                    <label style={{ display: 'inline-block' }} for="file">Browse</label>
                </div>
            <div className='middle'>
                <div className='aut'>
                    <input type='text' name='author' placeholder='Author' value={author} onChange={handleAuth} required/>
                </div>
                <div className='loc'>
                    <input type='text' name='location' placeholder='Location' value={location} onChange={handleLoc} required/>
                </div>
            </div>
            <div className='bot'>
                <input type='text' name='description' placeholder='Description' value={description} onChange={handleDesc} required/>
            </div>
            <div>
                <button className='adding' onClick={posted}  disabled={!(image && author && location && description)}> Post </button>
            </div>
        </div>
        </div>
        </>
    )
}

export default Posting;
