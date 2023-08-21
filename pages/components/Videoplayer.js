import * as React from "react";
import Button from '@mui/material/Button';
import { Box,Container, Paper, Slide } from "@mui/material";
import { keyframes } from "@mui/material";
import ReactPlayer from 'react-player';


function VideoPlayer() {
    const videoUrl = 'https://www.youtube.com/embed/piNI6hRyPzM?wmode=transparent&autoplay=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&list=PLFaEw-2w6HsVZs8hmWdbpEaaRCuZ1V35a'
    return (
        <>
            
            <iframe src={videoUrl} 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen >
            </iframe>
        </>
    )
}
export default VideoPlayer;

