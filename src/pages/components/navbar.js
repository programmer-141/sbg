import "../components/styles/navbar.css";
import Avatar from "./assets/avatar.jpg";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const linkStyle = {
  color: `inherit`,
  textDecoration: `none`,
};

export default function Navbar() {

  //change nav background color on click
  const navBgcC1 = () => {
    document.getElementById("navbar").style.background = "#0e162e";
  };
  const navBgcC2 = () => {
    document.getElementById("navbar").style.background = "blueviolet";
  };


  // ham menu for small screens (mediaQuery)
  function menuOpen() {
    document.getElementById('navWrapper').style.width = '100%';
    document.getElementById('navWrapper').style.fontSize = '29px';
    document.getElementById('navWrapper').style.height = '669px';
  }
  function menuClose() {
    document.getElementById('navWrapper').style.width = '0%';
    document.getElementById('navWrapper').style.fontSize = '0';
    document.getElementById('navWrapper').style.height = '0px';
  }



  return (
    <>
      <div className="navbar" id="navbar">
        <div className="titleBar">
          <img src={Avatar} className="avatar" id="avatar" alt="" />
          <p className="title">Sri Balaji Group</p>
        </div>
        <ul className="navWrapper">
          <li className="listCont" >
            <Link to="/" onClick={navBgcC1} style={linkStyle}>
              Home
            </Link>
          </li>
          <li className="listCont" >
            <Link to="/layout" onClick={navBgcC2} style={linkStyle}>
              Layouts
            </Link>
          </li>
          <li className="listCont" >
            <Link to="/construction" onClick={navBgcC1} style={linkStyle}>
              Constructions
            </Link>
          </li>
          <li className="listCont" >
            <Link to="/marketing" onClick={navBgcC2} style={linkStyle}>
              Marketing
            </Link>
          </li>
          <li className="listCont" >
            <Link to="/contact" onClick={navBgcC1} style={linkStyle}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar2">
        <div className="titleBar">
          <img src={Avatar} className="avatar" alt="" />
          <p className="title">Sri Balaji Group</p>
        </div>
        <MenuIcon className="icon" onClick={menuOpen} />
        <ul className="navWrapper" id="navWrapper">
          <CloseIcon className = "closebtn" onClick={menuClose} />
          <li className="listCont" onClick={menuClose} >
            <Link to="/" style={linkStyle}>
              Home
            </Link>
          </li>
          <li className="listCont" onClick={menuClose} >
            <Link to="/layout" style={linkStyle}>
              Layouts
            </Link>
          </li>
          <li className="listCont" onClick={menuClose} >
            <Link to="/construction" style={linkStyle}>
              Constructions
            </Link>
          </li>
          <li className="listCont" onClick={menuClose} >
            <Link to="/marketing" style={linkStyle}>
              Marketing
            </Link>
          </li>
          <li className="listCont" onClick={menuClose} >
            <Link to="/contact" style={linkStyle}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
