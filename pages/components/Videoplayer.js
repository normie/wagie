import * as React from "react";
import { useRef,useEffect,useState } from "react";
import Button from '@mui/material/Button';
import { Box,Container, Paper, Slide,Modal,Typography} from "@mui/material";
import Image from 'next/image';
import localFont from 'next/font/local'
import Player from 'react-player';

let totalWatchTime = -1;


function VideoPlayer() {
  const iframeRef = useRef(null);
  
  

  const [open, setOpen] = React.useState(false);
  const [mute, setMute] = React.useState(true);
  const [play, setPlay] = React.useState(true);
  const [pause, setPause] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleMute = () => setMute(true);
  const handleUnmute = () => setMute(false);
  const handlePlay = () => setPlay(true);
  const handlePause = () => setPlay(false);
  const handleClick = () => {
    while (true) {
      handleUnmute();
      handleClose();
      return false;
    }
  };

  const videoUrl = "https://www.youtube.com/embed/piNI6hRyPzM";

  const clearMultTimeout = (timeoutIDs) => {
    for (const timeoutID of timeoutIDs) {
      clearTimeout(timeoutID);
    }
  };

  useEffect(() => {
    const timeoutIDs = [
      setTimeout(() => {
        setOpen(true);
      }, 1500),
    ];
    // clear timer if the component unmount
    return () => clearTimeout(timeoutIDs);
  }, []);

  return (
    <>
      <Player
        url={videoUrl}
        ref={iframeRef}
        title="Hero"
        controls={false}
        muted={mute}
        loop={true}
        playing={play}
        wrapper="wrapper-container"
        width="100%"
        height="100%"
        onStart={() => console.log("media started!")}
        onPause={() => console.log("PauseCallback, ", (totalWatchTime -= 1))}
        onProgress={() =>
          console.log("ProgressCallback, watch time: ", (totalWatchTime += 1))
        }
      ></Player>
      <div className="modal-wrapper">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="modal-container">
            <div className="dialogue-box">
              <div className="dialogue-title">
                <Typography id="modal-modal-title" sx= {{
                  width:'250px',
                  fontSize: '1.75rem',
                  fontWeight: '100',
                  fontFamily:"tahoma",
                }}>
                  It looks like you are trying to access the Fresco Corporation.
                  Do you need some help?
                </Typography>
              </div>
              <div className="button-container">
                <Button onClick={handleClick} sx={{
                  marginTop:'10px', 
                  display:'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width:'125px',
                  color:'black',
                  padding: '5px',
                  border: '2px solid #666',
                  
                }}>
                  <Typography id="modal-modal-description" sx={{ mt: 2,
                    fontSize:'2rem',
                    color:'black',
                    opacity: '0.8',
                    marginTop: '0px', }}>
                    Yes
                  </Typography>
                </Button>
                <Button onClick={handleClick} sx={{
                  marginTop:'10px', 
                  display:'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width:'125px',
                  color:'black',
                  padding: '5px',
                  border: '2px solid #666',
                }}>
                  <Typography id="modal-modal-description" sx={{ mt: 2,
                    fontSize:'2rem',
                    color:'black',
                    opacity: '0.8',
                    marginTop: '0px', }}>
                    Yes
                  </Typography>
                </Button>
              </div>
            </div>
            <div className="clippy-container"></div>
          </div>
        </Modal>
      </div>
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