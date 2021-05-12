import "./components/styles/home.css";
import ImgCard from "./components/card";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="homePage">
      <div className="container1">
        <div className="textWrapper">
          <p className="entryText">
            Welcome <span>to</span> Sri Balaji Group
          </p>
          <p className="subText">
            Welcome to the Premium estate Compan. The place where you can own
            properties with the best prices. Also you can get to know about the
            details of every site in this site incld the details of site
            holders. Get in and find the best property which suits you.
          </p>
          <Link to="/layout">
            <button className="Homebtn">Find</button>
          </Link>
          <span className="arrow"></span>
        </div>
      </div>
      <div className="container2">
        <div className="textWrapper">
          <p className="entryText">We are Here to provide you the Best !!!</p>
          <span />
          <p className="subText">
            Welcome to the Premium estate Compan. The place where you can own
            properties with the best prices. Also you can get to know about the
          </p>
        </div>
         <ul className="imageWrapperBox">
           <li><ImgCard /></li>
           <li><ImgCard /></li>
           <li><ImgCard /></li>
         </ul>
      </div>
      {/* <div className="footer">

      </div> */}
    </div>
  );
}
