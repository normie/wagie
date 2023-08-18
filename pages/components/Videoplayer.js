import * as React from "react";
import Button from '@mui/material/Button';
import { Box,Container, Paper, Slide } from "@mui/material";
import { keyframes } from "@mui/material";
import ReactPlayer from 'react-player';


function VideoPlayer() {
    const videoUrl = 'https://player.vimeo.com/video/854420264?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
    return (
        <>
            <Container className='videoWrapper' fixed={true}>
                <ReactPlayer width='100%' minWidth='800px' className ='react-player'
                maxWidth='1000px' 
                height ='100%' objectFit='fill' 
                maxHeight='800px' 
                loop={true}
                url={`${videoUrl}`}
                controls
               ></ReactPlayer>
            </Container>
        </>
    )
    
}
export default VideoPlayer;