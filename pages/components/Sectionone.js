import * as React from "react";
import Button from '@mui/material/Button';
import { Box,Container, Paper, Slide } from "@mui/material";
import { keyframes } from "@mui/material";
import tvstatic  from "../../public/assets/tv-static.gif"
import Image from 'next/image';
import VideoBg from './Videobg.js';
import VideoPlayer from './Videoplayer.js';
import { staticPageGenerationTimeout } from "@/next.config";
import HeaderNavbar from "./Navbar";

function SectionOneBg() {
    const gradientMove = keyframes`
    0%{background-size: 100% 4px}
    50%{background-size: 100% 2px}
    100%{background-size: 100% 4px}
    `
    return (
        <>
        
            <Container
            component="div"
            maxWidth='false'
            sx={{
            MarginBottom: '5rem',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            background: 'linear-gradient(to bottom, #000, #000 50%, #222 50%,#222)',
            backgroundSize: '100% 4px',
            animation: `${gradientMove} 200ms ease infinite`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            height:"150vh",
            border: 'black solid 1px',
            zIndex: '1'
            }}
            >   
                <HeaderNavbar></HeaderNavbar>
                <VideoBg>
                </VideoBg>
            </Container>
            
        </>

        
    )
}


export default SectionOneBg;


