import * as React from "react";
import { useRef,useEffect,useState } from "react";
import { YoutubePlayer} from "youtube-player";
import Button from '@mui/material/Button';
import { Box,Container, Paper, Slide } from "@mui/material";
import { keyframes } from "@mui/material";
import Player from 'react-player';

let totalWatchTime = -1;

function VideoPlayer() {
    const [playing, setPlaying] = useState(false);
    const [ready,setReady] = useState(false);
    const iframeRef = useRef(null);
    const onReady = React.useCallback(() => {
    })

    useEffect(() => {
       
    },[iframeRef]);

    const playVideo = () => {
        this.refs.iframeRef.play();
    }

    const videoUrl = 'https://www.youtube.com/embed/piNI6hRyPzM'
    
    return (
        <>
            
            <Player
            url={videoUrl}
            ref={iframeRef}
            title="Hero"
            controls={false}
            muted={true}
            loop={true}
            playing={true}
            wrapper="wrapper-container"
            width="100%"
            height="100%"
            onStart={() => console.log("media started!")}
            onPause={() => console.log("PauseCallback, ", (totalWatchTime -= 1))}
            onProgress={() =>
            console.log("ProgressCallback, watch time: ", (totalWatchTime += 1))
            }
            >
            </Player>
        </>
    )
}
export default VideoPlayer;

// ?autoplay=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&list=PLFaEw-2w6HsVZs8hmWdbpEaaRCuZ1V35a

/* 
    <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
    </div>
*/