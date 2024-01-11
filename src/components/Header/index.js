import React, { useState, useEffect, useCallback, useRef } from "react";
import '../../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from "react-bootstrap";
import { Collapse } from "react-bootstrap";
import {Helmet} from 'react-helmet';

preloadImage("../../img/day-background-yellow-min.png");
preloadImage("../../img/day-background-red-min.png"); 
preloadImage("../../img/day-background-green-min.png"); 
preloadImage("../../img/day-background-blue-min.png"); 
preloadImage("../../img/night-background-yellow-min.png"); 
preloadImage("../../img/night-background-red-min.png"); 
preloadImage("../../img/night-background-green-min.png"); 
preloadImage("../../img/night-background-blue-min.png"); 

function preloadImage(url){
  var img=new Image();
  img.src=url;
}

export default function Header(props){
  const [mode, setMode] = useState(props.mode)
  const [currentMode, setCurrentMode] = useState('mode-menu-button-' + mode)
  const [lightColor, setLightColor] = useState("yellow")
  const [headerColor, setHeaderColor] = useState("header " + mode + "-header-" + lightColor) ;

  const [open, setOpen] = useState(false);
  const [tryIt, setTryIt] = useState("Try it")

  const tryItFunction = useCallback(()=>{
    setOpen(!open);
    (tryIt === "Try it" ? setTryIt("Lighter") : setTryIt("Try it"));
  })
  function modeFunction(){
    if(mode === "night"){
      setHeaderColor("header day-header-" + lightColor);
    }
    if(mode === "day"){
      setHeaderColor("header night-header-" + lightColor);
    }
    currentMode === "mode-menu-button-night" ? setCurrentMode('mode-menu-button-day') : setCurrentMode('mode-menu-button-night');
    mode === "day" ? setMode("night") : setMode("day");
  }

  return(
  <>
  {/* <Helmet>
    <style>{'body { background-color: ' + mode + '; }'}</style>
  </Helmet> */}

  <header className={headerColor}>
    <div className='container d-flex'>
      
      <div className='offer d-flex flex-column justify-content-center align-items-center align-self-center'>
        <h1>Lighter</h1>
        <h6>Make your light better</h6>
        <a href='#main-block'><button className='offer-button'>More</button></a>
      </div>

      <div className="functional d-flex flex-column align-items-center justify-content-between">

        <div className="mode-menu d-flex">
          <button className={"mode-menu-button " + currentMode} onClick={modeFunction}><div className="circle"></div></button>
        </div>

        <div className='header-remote d-flex'> 
          <div className='remote d-flex flex-column justify-content-center align-items-center '>
            <Button onClick={tryItFunction} aria-controls="remote-collapse" aria-expanded={open} className='remote-button'>{tryIt}</Button>
            <Collapse in={open}>
              <div id="remote-collapse">
                <div className='remote-collapse d-flex flex-row flex-wrap align-items-center justify-content-center'>
                <button className='remote-collapse-button' style={{background: "#B22222"}} onClick={() => {setHeaderColor("header " +  mode + "-header-red"); setLightColor("red")}}></button>
                <button className='remote-collapse-button' style={{background: "#228B22"}} onClick={() => {setHeaderColor("header " +  mode + "-header-green"); setLightColor("green")}}></button>
                <button className='remote-collapse-button' style={{background: "#1E90FF"}} onClick={() => {setHeaderColor("header " +  mode + "-header-blue"); setLightColor("blue")}}></button>
                <button className='remote-collapse-button' style={{background: "#FFD700"}} onClick={() => {setHeaderColor("header " +  mode + "-header-yellow"); setLightColor("yellow")}}></button>
                </div>
              </div>
            </Collapse>
          </div>
        </div>

      </div>
    <div/>
  </div>
  </header>
  </>
  );
}