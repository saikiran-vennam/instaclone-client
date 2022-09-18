import './Landing.css';
import Welcome from './welcome.jpg'

function Landing() {
    return (
        <div className="Landing">
            <div className="imging">
                <img src={Welcome} alt="Welcome"/>
            </div>
            <div className="contents">
                <div className="welcomeNote">
                    Welcome ! Please click ENTER for instaClone.
                </div>
                <div className="button">
                     <a href='/InstaPage'> <button > ENTER </button> </a> 
                </div>
            </div>
        </div>
    )
}

export default Landing;