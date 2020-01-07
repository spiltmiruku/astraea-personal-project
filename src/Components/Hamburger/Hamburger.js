import React, { useState, useEffect } from 'react';
import AJS from './AJS';
import './hamburger.css';

///Position Rotation
function positionRotation( centerPoint, orbitPoint, angleInRads ) {
  var distance = Math.sqrt( Math.pow( orbitPoint.x-centerPoint.x, 2 ) + Math.pow( orbitPoint.y-centerPoint.y, 2 ) );
  orbitPoint.x = centerPoint.x + Math.cos( angleInRads ) * distance;
  orbitPoint.y = centerPoint.y + Math.sin( angleInRads ) * distance;
}

let closeMenuAnimation;
let openMenuAnimation;

const Hamburger = ({onClick, state, setState}) => {
  const [oldState, setOldState] = useState(state);
  const [crossDisappearComplete, setCrossDisappearComplete] = useState(true);
  const [crossAppearComplete, setCrossAppearComplete] = useState(false);
  const [menuAppearComplete, setMenuAppearComplete] = useState(true);
  const [menuDisappearComplete, setMenuDisappearComplete] = useState(false);
  // Gets called after render
  useEffect(() => {    
    var topLine_3 = document.getElementById("top-line-3");
    var middleLine_3 = document.getElementById("middle-line-3");
    var bottomLine_3 = document.getElementById("bottom-line-3");
    
    ///Animation Variables
    var segmentDuration_3 = 20;
    var menuDisappearDurationInFrames_3 = segmentDuration_3;
    var crossAppearDurationInFrames_3 = segmentDuration_3*1.5;
    var crossDisappearDurationInFrames_3 = segmentDuration_3*1.5;
    var menuAppearDurationInFrames_3 = segmentDuration_3;
    var currentFrame_3 = 0;
    var cPt_3 = { x: 50, y: 50 };  // center point
    var tlPt_3 = { x: 30, y: 37 };  // top right point
    var trPt_3 = { x: 70, y: 37 };  // top left point
    var mlPt_3 = { x: 30, y: 50 };  // middle right point
    var mrPt_3 = { x: 70, y: 50 };  // middle left point
    var blPt_3 = { x: 30, y: 63 };  // bottom right point
    var brPt_3 = { x: 70, y: 63 };  // bottom left point

    

    ///Menu Disappear
    function menuDisappearAnimation_3() {
      currentFrame_3++;
      if ( currentFrame_3 <= menuDisappearDurationInFrames_3 ) {
        window.requestAnimationFrame( ()=> { 
          var rotation = Math.PI*0.5;
          //top line
          var tlAng = AJS.easeInBack( 3.7179, 3.7179+rotation, menuDisappearDurationInFrames_3, currentFrame_3 );
          var trAng = AJS.easeInBack( 5.7068, 5.7068+rotation, menuDisappearDurationInFrames_3, currentFrame_3 );
          positionRotation( cPt_3, tlPt_3, tlAng );
          positionRotation( cPt_3, trPt_3, trAng );
          topLine_3.setAttribute( "d", "M"+tlPt_3.x+","+tlPt_3.y+" L"+trPt_3.x+","+trPt_3.y+" Z" );
          //middle line
          var mlAng = AJS.easeInBack( Math.PI, Math.PI+rotation, menuDisappearDurationInFrames_3, currentFrame_3 );
          var mrAng = AJS.easeInBack( 0, rotation, menuDisappearDurationInFrames_3, currentFrame_3 );
          positionRotation( cPt_3, mlPt_3, mlAng );
          positionRotation( cPt_3, mrPt_3, mrAng );
          middleLine_3.setAttribute( "d", "M"+mlPt_3.x+","+mlPt_3.y+" L"+mrPt_3.x+","+mrPt_3.y+" Z" );
          //bottom line
          var blAng = AJS.easeInBack( 2.5652, 2.5652+rotation, menuDisappearDurationInFrames_3, currentFrame_3 );
          var brAng = AJS.easeInBack( 0.5763, 0.5763+rotation, menuDisappearDurationInFrames_3, currentFrame_3 );
          positionRotation( cPt_3, blPt_3, blAng );
          positionRotation( cPt_3, brPt_3, brAng );
          bottomLine_3.setAttribute( "d", "M"+blPt_3.x+","+blPt_3.y+" L"+brPt_3.x+","+brPt_3.y+" Z" );
          //recursion
          menuDisappearAnimation_3();
        });
      } else {
        currentFrame_3 = 0;
        setMenuDisappearComplete(true);
        openMenuAnimation();
      }
    }

    ///Cross Appear
    function crossAppearAnimation_3() {
      currentFrame_3++;
      if ( currentFrame_3 <= crossAppearDurationInFrames_3 ) {
        tlPt_3 = { x: 50, y: 28.7867 };
        trPt_3 = { x: 50, y: 71.2132 };
        mlPt_3 = { x: 28.7867, y: 50 };
        mrPt_3 = { x: 71.2132, y: 50 };
        window.requestAnimationFrame( ()=> { 
          var rotation = Math.PI*0.75;
          //top line
          var tlAng = AJS.easeOutBack( Math.PI, Math.PI+rotation, crossAppearDurationInFrames_3, currentFrame_3 );
          var trAng = AJS.easeOutBack( 0, rotation, crossAppearDurationInFrames_3, currentFrame_3 );
          positionRotation( cPt_3, tlPt_3, tlAng );
          positionRotation( cPt_3, trPt_3, trAng );
          topLine_3.setAttribute( "d", "M"+tlPt_3.x+","+tlPt_3.y+" L"+trPt_3.x+","+trPt_3.y+" Z" );
          //center line
          var mlAng = AJS.easeOutBack( Math.PI*1.5, Math.PI*1.5+rotation, crossAppearDurationInFrames_3, currentFrame_3 );
          var mrAng = AJS.easeOutBack( Math.PI*0.5, Math.PI*0.5+rotation, crossAppearDurationInFrames_3, currentFrame_3 );
          positionRotation( cPt_3, mlPt_3, mlAng );
          positionRotation( cPt_3, mrPt_3, mrAng );
          middleLine_3.setAttribute( "d", "M"+mlPt_3.x+","+mlPt_3.y+" L"+mrPt_3.x+","+mrPt_3.y+" Z" );
          //bottom line
          bottomLine_3.style.opacity = 0;
          //recursion
          crossAppearAnimation_3();
        });
      } else {
        currentFrame_3 = 0;
        setCrossAppearComplete(true);
        openMenuAnimation();
      }
    }

    ///Combined Open Menu Animation
    openMenuAnimation = () => {
      if ( !menuDisappearComplete ) { 
        menuDisappearAnimation_3();
      } else if ( !crossAppearComplete) {
        crossAppearAnimation_3();
      }
    }

    ///Cross Disappear
    function crossDisappearAnimation() {
      currentFrame_3++;
      if ( currentFrame_3 <= crossDisappearDurationInFrames_3 ) {
        window.requestAnimationFrame( ()=> { 
          var rotation = Math.PI*0.75;
          //top line
          var tlAng = AJS.easeInBack( Math.PI*1.75, Math.PI*1.75+rotation, crossDisappearDurationInFrames_3, currentFrame_3 );
          var trAng = AJS.easeInBack( Math.PI*0.75, Math.PI*0.75+rotation, crossDisappearDurationInFrames_3, currentFrame_3 );
          positionRotation( cPt_3, tlPt_3, tlAng );
          positionRotation( cPt_3, trPt_3, trAng );
          topLine_3.setAttribute( "d", "M"+tlPt_3.x+","+tlPt_3.y+" L"+trPt_3.x+","+trPt_3.y+" Z" );
          //center line
          var mlAng = AJS.easeInBack( Math.PI*2.25, Math.PI*2.25+rotation, crossDisappearDurationInFrames_3, currentFrame_3 );
          var mrAng = AJS.easeInBack( Math.PI*1.25, Math.PI*1.25+rotation, crossDisappearDurationInFrames_3, currentFrame_3 );
          positionRotation( cPt_3, mlPt_3, mlAng );
          positionRotation( cPt_3, mrPt_3, mrAng );
          middleLine_3.setAttribute( "d", "M"+mlPt_3.x+","+mlPt_3.y+" L"+mrPt_3.x+","+mrPt_3.y+" Z" );
          //bottom line
          bottomLine_3.style.opacity = 0;
          //recursion
          crossDisappearAnimation();
        });
      } else {
        middleLine_3.style.opacity = "1";
        currentFrame_3 = 0;
        setCrossDisappearComplete(true);
        closeMenuAnimation();
      }
    }

    ///Menu Appear
    function menuAppearAnimation() {
      currentFrame_3++;
      if ( currentFrame_3 <= menuAppearDurationInFrames_3 ) {
        tlPt_3 = { x: 37, y: 70 };
        trPt_3 = { x: 37, y: 30 };
        mlPt_3 = { x: 50, y: 70 };
        mrPt_3 = { x: 50, y: 30 };
        bottomLine_3.style.opacity = 1;
        window.requestAnimationFrame( ()=> {  
          var rotation = Math.PI*0.5;
          //top line
          var tlAng = AJS.easeOutBack( 2.1471, 2.1471+rotation, menuDisappearDurationInFrames_3, currentFrame_3 );
          var trAng = AJS.easeOutBack( 4.1360, 4.1360+rotation, menuDisappearDurationInFrames_3, currentFrame_3 );
          positionRotation( cPt_3, tlPt_3, tlAng );
          positionRotation( cPt_3, trPt_3, trAng );
          topLine_3.setAttribute( "d", "M"+tlPt_3.x+","+tlPt_3.y+" L"+trPt_3.x+","+trPt_3.y+" Z" );
          //middle line
          var mlAng = AJS.easeOutBack( Math.PI*0.5, Math.PI*0.5+rotation, menuDisappearDurationInFrames_3, currentFrame_3 );
          var mrAng = AJS.easeOutBack( Math.PI*1.5, Math.PI*1.5+rotation, menuDisappearDurationInFrames_3, currentFrame_3 );
          positionRotation( cPt_3, mlPt_3, mlAng );
          positionRotation( cPt_3, mrPt_3, mrAng );
          middleLine_3.setAttribute( "d", "M"+mlPt_3.x+","+mlPt_3.y+" L"+mrPt_3.x+","+mrPt_3.y+" Z" );
          //bottom line
          var blAng = AJS.easeOutBack( 0.9944, 0.9944+rotation, menuDisappearDurationInFrames_3, currentFrame_3 );
          var brAng = AJS.easeOutBack( 5.2887, 5.2887+rotation, menuDisappearDurationInFrames_3, currentFrame_3 );
          positionRotation( cPt_3, blPt_3, blAng );
          positionRotation( cPt_3, brPt_3, brAng );
          bottomLine_3.setAttribute( "d", "M"+blPt_3.x+","+blPt_3.y+" L"+brPt_3.x+","+brPt_3.y+" Z" );
          //recursion
          menuAppearAnimation();
        });
      } else {
        currentFrame_3 = 0;
        setMenuAppearComplete(true);
      }
    }

    ///Close Menu Animation
    closeMenuAnimation = () => {
      if ( !crossDisappearComplete ) {
        crossDisappearAnimation();
      } else if ( !menuAppearComplete ) {
        menuAppearAnimation();
      }
    }
    if (state === "menu" && oldState !== state) {
      closeMenuAnimation();
      setState("menu");
      setOldState("menu");
      setMenuDisappearComplete(false);
      setCrossAppearComplete(false);
    }
  });
  return (
    <div id="hamburger-container" onClick={() => {
        if ( state === "menu" ) {
          openMenuAnimation();
          setState("cross");
          setOldState("cross");
          setCrossDisappearComplete(false);
          setMenuAppearComplete(false);
        } else if ( state === "cross" ) {
          closeMenuAnimation();
          setState("menu");
          setOldState("menu");
          setMenuDisappearComplete(false);
          setCrossAppearComplete(false);
        }
        onClick();
    }}>
      <div id="hamburger" className="box">
        <svg id="i3" className="icon" viewBox="0 0 100 100">
          <path id="top-line-3"     d="M30,37 L70,37 Z"></path>
          <path id="middle-line-3" 	d="M30,50 L70,50 Z"></path>
          <path id="bottom-line-3" 	d="M30,63 L70,63 Z"></path>
        </svg>  
      </div>
    </div>
  );
}
export default Hamburger;