import { Link } from 'react-router-dom';

export default function ContactPostShow() {
  return (
    <div className="postBarInner" id="contactSec" >
      <div className="postList">
        <div className="postWrapper">
          <Link to="/contactPostEntry" style={{ color: "black" }} className="postTitle">Name</Link>
          <button className="btn">Delete</button>
        </div>
      </div>
    </div>
  );
}
