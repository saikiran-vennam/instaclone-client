import Icon from './insta_clone.png'
import Cam from './Cam.png'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className="headerMain">
            <div className="imageIcon"> 
                <img src={Icon} alt="Icon" />
                <div className='iconName'>Instaclone</div>
            </div>
            <div className='cam'>
             <Link to='/posting' > <img src={Cam} alt="Cam" /> </Link>
            </div>
        </div>
    )
}

export default Header;
