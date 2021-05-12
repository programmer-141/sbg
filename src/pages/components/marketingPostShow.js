import { Link } from 'react-router-dom';

export default function MarketingPostShow() {
  return (
    <div className="postBarInner" id="marketingSec">
      <div className="postList">
        <div className="postWrapper">
          <Link to="/postEntry" style={{ color: "black" }} className="postTitle">marketing-title</Link>
          <button className="btn">Delete Post</button>
        </div>
      </div>
      <div className="btnCont">
        <button className="btn">Add +</button>
      </div>
    </div>
  );
}
