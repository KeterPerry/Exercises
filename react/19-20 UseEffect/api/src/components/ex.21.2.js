import React, { useEffect, useState, useRef } from "react";

export default function Video() {
  const videoRef = useRef();

  const playVid = () => {
    videoRef.current.play();
  };

  const pauseVid = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <video
        ref={videoRef}
        src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4
"
        width="300"
        height="300px"
        controls
      ></video>
      <div>
        <button onClick={playVid}>Play</button>
        <button onClick={pauseVid}>Pause</button>
      </div>
    </div>
  );
}
