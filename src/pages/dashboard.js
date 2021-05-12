import "./components/styles/dashboard.css";
import Avatar from "./components/assets/avatar.jpg";
import LandscapeOutlinedIcon from "@material-ui/icons/LandscapeOutlined";
import BusinessIcon from "@material-ui/icons/Business";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import LayoutPostShow from './components/layoutPostShow';
import MarketingPostShow from './components/marketingPostShow';
import ConstructionsPostShow from './components/constructionsPostShow';
import ContactPostShow from './components/contactMesgShow';

export default function AdminPanel() {

  //title toggler functions
  const titleToggler1 = () => {
    document.getElementById('title').innerText = 'Layouts';
  };
  const titleToggler2 = () => {
    document.getElementById('title').innerText = 'Construction'
  };
  const titleToggler3 = () => {
    document.getElementById('title').innerText = 'Marketing'
  }; 
  const titleToggler4 = () => {
    document.getElementById('title').innerText = 'Contact'
  };

  
  return (
    <div className="container">
      <div className="topBar">
        <div className="titleBar">
          <img src={Avatar} className="avatar" alt="" />
          <p className="title">Sri Balaji Realestates</p>
        </div>
        <button className="btnBar">Log Out</button>
      </div>
      <div className="menuBar">
        <p className="menuTitle">Dashboard</p>
        <ul className="listBar">
          <a href = "#layoutSec" className="listCont" onClick={titleToggler1}>
            <LandscapeOutlinedIcon style={{color:'black'}} />
            <p>Layouts</p>
          </a>
          <a href = "#constructionSec" className="listCont" onClick={titleToggler2}>
            <BusinessIcon style={{color:'black'}} />
            <p>Construction</p>
          </a>
          <a href = "#marketingSec" className="listCont" onClick={titleToggler3}>
            <BusinessIcon style={{color:'black'}} />
            <p>Marketing</p>
          </a>
          <a href = "#contactSec" className="listCont" onClick={titleToggler4}>
            <BusinessCenterIcon style={{color:'black'}} />
            <p>Contact</p>
          </a>
        </ul>
      </div>
      <div className="mainBar">
        <p className="titleBar" >
          <span id="title">Layouts</span> Dashboard - Posts
        </p>
        <div className="postBar">
          <LayoutPostShow />
          <ConstructionsPostShow />
          <MarketingPostShow />
          <ContactPostShow />
        </div>
      </div>
    </div>
  );
}
