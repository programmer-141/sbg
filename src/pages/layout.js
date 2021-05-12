import "./components/styles/layout.css";
import { SearchOutlined } from "@material-ui/icons";
import ImgCard from "./components/card";
import { useState } from "react";
import { motion } from "framer-motion";

const LayoutPage = () => {
  
  //Returns the value entered in the inputs

  const [inputHandler, setinputHandler] = useState("");
  function handleChange(e) {
    setinputHandler(e.target.value);
    var inputText = document.getElementById("inputText");
    var subtitleWrapper = document.getElementById("subtitleWrapper");
    if (inputText.value === "") {
      subtitleWrapper.style.display = "none";
    } else {
      subtitleWrapper.style.display = "flex";
    }
  }

  //frammer motion animation variables 
  
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="layoutContainer">
      <div className="titleWrapper">
        <p className="title">Layouts</p>
      </div>
      <div className="inputWrapper">
        <input
          type="text"
          className="input"
          value={inputHandler}
          placeholder="Search"
          onChange={handleChange}
          id="inputText"
        />
        <button className="btn">
          <SearchOutlined className="icon" />
        </button>
      </div>
      <div
        className="subtitleWrapper"
        id="subtitleWrapper"
        style={{ display: "none" }}
      >
        <p className="subtitle">
          Search results for <span>' {inputHandler} '</span>
        </p>
      </div>
      <motion.div
        className="cardWrapper"
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <ImgCard />
        <ImgCard />
        <ImgCard />
        <ImgCard />
        <ImgCard />
        <ImgCard />
        <ImgCard />
      </motion.div>
    </div>
  );
};
export default LayoutPage;
