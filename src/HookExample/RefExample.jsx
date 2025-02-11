//using useRef for a video and text
import React, { useEffect, useRef, useState } from 'react'
import Video from "./BahubaliVideo.mp4"
const RefExample = () => {
    const eleRef = useRef();
    const [play, setPlay] = useState(true);
    let VideoRef = useRef();
    console.log(VideoRef);
    useEffect(()=>{
        eleRef.current.style.color="crimson"
        eleRef.innerText = "React Ref"
    })
    let playORpause =()=>{
        if(play === true){
            VideoRef.current.play();
            console.log(play);
            setPlay(false);
        }
        else{
            VideoRef.current.pause();
            console.log(play);
            setPlay(true);
        }
    }
  return (
    <>
      <h1 ref={eleRef}>This is Reference Example</h1>
        <video src={Video} ref={VideoRef}  onClick={playORpause}></video>
        <h2>Bahubali song</h2>

    </>
  )
}

export default RefExample
