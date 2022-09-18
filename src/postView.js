import Header from './Header';
import PostData from './post';

function Post(props) {
    if(props.data.length === 0) {
      return (
        <div className="WholePage"> 
          <Header />
          <div className='noposts'> Uh OH ! No Posts Yet. Please click above button to add Posts </div>
        </div>
    )}
    return (
      <div className="WholePage"> 
        <Header />
        {props.data.map((User)=>( <div className='container'><PostData data = {User}/></div>))}   
      </div>
    )
}

export default Post;