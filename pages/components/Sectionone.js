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
import ScrollBtn from "./ScrollButton.js";

function SectionOneBg() {

    return (
        <>
        
            <Container
            component="div"
            maxWidth='false'
            id='sectionOne'
            sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            backgroundSize: "cover",
            minHeight: '1050px',
            height:"100vh",
            '@media (max-width:1200px)':{
                height:"55vh",
                minHeight: "975px",
            },
            '@media (max-width:980px)':{
                height:'75vh ',
                minHeight: '900px !important',
            },
            '@media (max-width:780px)':{
                minHeight: '750px !important',
                height:"50vh",
            },
            '@media (max-width:720px)':{
                minHeight: '700px !important',

            },
            '@media (max-width:600px)':{
                height:'550px !important',
                minHeight: '525px !important',
                maxHeight: '600px !important',
            },
            '@media (max-width:400px)':{
                maxHeight: '575px !important'
            },
            border: 'black solid 1px',
            zIndex: '0'
            }}
            >   
                <HeaderNavbar></HeaderNavbar>
                <VideoBg>
                </VideoBg>
                <ScrollBtn></ScrollBtn>
            </Container>
            
        </>

        
    )
}


export default SectionOneBg;


