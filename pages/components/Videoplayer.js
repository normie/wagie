import * as React from "react";
import { YoutubePlayer} from "youtube-player";
import Button from '@mui/material/Button';
import { Box,Container, Paper, Slide } from "@mui/material";
import { keyframes } from "@mui/material";
import ReactPlayer from 'react-player';



function VideoPlayer() {
    const iframeRef = useRef(null);

    useEffect(() => {
        const player = new YoutubePlayer(iframeRef.current, {
            videoId: "piNI6hRyPzM",
        });
        player.loadVideo();


        player.on('playerStateChange', (event) => {
            console.log(event.data.toString());
        });
       
    },[iframeRef]);



    const videoUrl = 'https://www.youtube.com/embed/piNI6hRyPzM?autoplay=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&list=PLFaEw-2w6HsVZs8hmWdbpEaaRCuZ1V35a'
    
    return (
        <>
            
            <iframe 
            ref={iframeRef}
            title="Hero"frameborder="0" 
            
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen allowTransparency >
            </iframe>
        </>
    )
}
export default VideoPlayer;



