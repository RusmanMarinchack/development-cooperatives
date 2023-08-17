import React, { useState } from "react";

import { Player } from 'video-react';

// Stile
import "./Video.scss";



function Video({ src, poster }) {
  const [ decorBack, setDecorBack ] = useState(true)

  function heandlerDecor() {
    setDecorBack(false)
  }

  return (
    <div 
    className={`video-container${decorBack ? " decor-back" : ""}`}
    onClick={heandlerDecor}
    >
       {/* <video width="100%" height="100%" controls>
          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
       </video> */}
      <Player 
      
      poster={poster}
      >
        <source src={src} />
      </Player>
    </div>
  );
}

export default Video;
