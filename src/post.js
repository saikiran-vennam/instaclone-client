import Like from './like.png';
import Send from './Sent.png';
import Dots from './dots.png'

function PostData(props) {
    let datesAlph = ["Jan", "Feb", 'Mar', "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let date1 = props.data.createdAt.slice(0,10);
    date1 = date1.split("-");
    date1 = date1[2] + " " + datesAlph[parseInt(date1[1]) -1] + " " + date1[0];
    const base64String = btoa(
        String.fromCharCode(...new Uint8Array((props.data.image.data.data)))
    )
    return (
        <div className="WholePost">
            <div className="postTop"> 
                <div className="NameLoc">
                    <div className="Name">{props.data.author}</div>
                    <div className="Loc">{props.data.location}</div>
                </div>
                <div className="dots"> 
                    <img src={Dots} alt="Options"/>  
                </div>
            </div>
            <div className="postMid">
                <img src={`data:image/png; base64, ${base64String}`} alt="posted"/>
            </div>
            <div className="likeSendDate">
                <div className="likeSend">
                    <img src={Like} alt="Like"/>
                    <img src={Send} alt="Send"/>
                </div>
                <div className="Date">{date1}</div> 
            </div>
            <div className="likesNum"> 
                <div className="lNum"> {parseInt(Math.random() * 100)}</div>
                <div className="LikesName">likes</div>
            </div>
            <div className="disc"> {props.data.description} </div>
        </div>
    )
}


export default PostData;