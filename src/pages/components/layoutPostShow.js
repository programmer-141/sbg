import { Link } from 'react-router-dom';

export default function LayoutPostShow() {
  return (
    <div className="postBarInner" id="layoutSec">
      <div className="postList">
        <div className="postWrapper">
          <Link to="/postEntry" style={{ color: "black" }} className="postTitle">post-title</Link>
          <button className="btn">Delete Post</button>
        </div>
      </div>
      <div className="btnCont">
        <button className="btn">Add +</button>
      </div>
    </div>
  );
}
