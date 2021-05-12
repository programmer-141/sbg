import "./components/styles/layout.css";
import { SearchOutlined } from "@material-ui/icons";
import ImgCard from "./components/card";
import { useState } from "react";




const MarketingPage = () => {

  //Returns the value entered in the inputs

  const [inputHandler, setinputHandler] = useState('');
  function handleChange(e){
    setinputHandler(e.target.value);
    var inputText = document.getElementById("inputText");
    var subtitleWrapper = document.getElementById("subtitleWrapper")
    if(inputText.value === ''){
      subtitleWrapper.style.display = 'none';
    }else{
      subtitleWrapper.style.display = 'flex';
    }
  }
  
  return (
    <div className="layoutContainer">
      <div className="titleWrapper" >
        <p className="title">Marketing</p>
      </div>
      <div className="inputWrapper">
        <input
          type="text"
          className="input"
          value={inputHandler}
          placeholder="Search"
          onChange = {handleChange}
          id = "inputText"
        />
        <button className="btn">
          <SearchOutlined className="icon" />
        </button>
      </div>
      <div className="subtitleWrapper" id = "subtitleWrapper" style={{display : 'none'}}>
        <p className="subtitle">Search results for <span>' {inputHandler} '</span></p>
      </div>
      <div className="cardWrapper">
        <ImgCard />
        <ImgCard />
        <ImgCard />
        <ImgCard />
        <ImgCard />
        <ImgCard />
        <ImgCard />
      </div>
    </div>
  );
};
export default MarketingPage;
