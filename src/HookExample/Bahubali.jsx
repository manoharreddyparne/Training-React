//Using the Ref controlling the audio tag on the Image
import React, {useRef,useState} from 'react'
import Audio from "./Bahubali_Song.mp3";
import Image from "./Bahubali_Image.jpeg"
const Bahubali = () => {

     const [play, setPlay] = useState(true);
        let AudioRef = useRef();
        console.log(AudioRef);
            let playORpause =()=>{
                if(play === true){
                    AudioRef.current.play();
                    console.log(play);
                    setPlay(false);
                }
                else{
                    AudioRef.current.pause();
                    console.log(play);
                    setPlay(true);
                }
            }
  return (
    <div>
      <img src={Image} alt="Bahubali_image"
      onClick={playORpause}
      style={{width:"1000px", cursor:"pointer", display:'flex'}} />
      <audio src={Audio} ref={AudioRef}></audio>
    </div>
  )
}

export default Bahubali
