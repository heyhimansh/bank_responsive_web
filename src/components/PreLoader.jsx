import React from "react";
import './preloader.css'
import { useEffect } from "react";
import { preLoaderAnim } from "../animations";

const PreLoader = () => {

    useEffect(() =>{
        preLoaderAnim
    },[]);
  return (
    <div className="preloader">
      <div className="text-container">
        <span>Developer,</span>
        <span>curator</span>
        <span>Vibe</span>
      </div>
    </div>
  );
};

export default PreLoader;
