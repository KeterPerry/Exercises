import React, { Component } from 'react'
import VideoItem from "./videoItem"


function videoList ({videos}) {
    const renderedList= videos.map((video)=>{
        return <VideoItem video={video}/>
    })
    return (
      <div>{renderedList}</div>
    )
  
}
export default videoList;
