import * as React from "react";
import Button from '@mui/material/Button';
import { Box,Container, Paper, Slide } from "@mui/material";
import { keyframes } from "@mui/material";
import tvstatic  from "../../public/assets/tv-static.gif"
import VideoBg from "./Videobg.js";
import VideoPlayer from './Videoplayer.js';

function SectionOneBg() {

    return (
        <>
        
            <Container
            component="div"
            maxWidth='false'
            sx={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            backgroundImage: `url(${tvstatic})`,
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center",
            backgroundSize: "cover",
            minHeight:'960px',
            height:"90vh",
            border: 'black solid 1px',
            zIndex: '1'
            }}
            >
                <VideoBg>
                </VideoBg>
            </Container>
            
        </>

        
    )
}


export default SectionOneBg;


