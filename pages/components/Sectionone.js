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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            background: 'linear-gradient(to bottom, #000, #000 50%, #222 50%,#222)',
            backgroundSize: '100% 4px',
            animation: `${gradientMove} 200ms ease infinite`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            minHeight: '1000px',
            height:"100vh",
            '@media (max-width:600px)':{
                height:"500px",
                minHeight: '400px',
                maxHeight: '600px !important',
            },
            '@media (max-width:1200px)':{
                height:"50vh",
                minHeight: "950px",
            },
            border: 'black solid 1px',
            zIndex: '0'
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


