import React,{useState} from 'react'
import ReactPlayer from 'react-player'
import './styles.css'
import { findDOMNode } from 'react-dom'
import { toast } from 'react-toastify';


function Player({url}) {
  const [fullscreenMode, setFullscreenMode] = useState(false)
    let player = null;
    const ref = (p) => {player = p;}
    
    const onStart = () => {
        if (fullscreenMode)
            findDOMNode(player).requestFullscreen().catch(
                (err) => 
                {toast.error("Could not activate full-screen mode :(")}
            );
    }

    const onEnded = () => {
        setFullscreenMode(document.fullscreenElement !== null);
    }
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        controls
        className="player"
         url={url}
         ref={ref}
         onStart={onStart}
         onEnded={onEnded}
      />
    </div>
    
  )
}

export default Player