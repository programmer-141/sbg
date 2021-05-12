import { Link } from 'react-router-dom';

export default function ConstructionsPostShow() {
  return (
    <div className="postBarInner" id="constructionSec">
      <div className="postList">
        <div className="postWrapper">
          <Link to="/postEntry" style={{ color: "black" }} className="postTitle">construction-title</Link>
          <button className="btn">Delete Post</button>
        </div>
      </div>
      <div className="btnCont">
        <button className="btn">Add +</button>
      </div>
    </div>
  );
}
