import "./styles/dashboard.css";

export default function PostEntry() {
  return (
    <div className="postBarInner">
      <p className="titleText">dashboard - PostEntry</p>
      <div className="formWrapper">
        <input type="text" className="input" placeholder="Title" />
        <input type="file" className=" file" />
        <textarea
          type="text"
          className=" input textarea"
          placeholder="address"
        />
        <textarea className=" input textarea" placeholder="discription" />
        <div className="galleryCont">
          <input type="file" className="file" />
          <input type="file" className="file" />
          <input type="file" className="file" />
          <input type="file" className="file" />
        </div>
      </div>
      <div className="btnWrapper">
        <button className="btn">Add Image +</button>
        <button className="btn">Update</button>
        <button className="btn">Save</button>
      </div>
    </div>
  );
}
