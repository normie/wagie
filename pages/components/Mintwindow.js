import * as React from "react";
import Button from '@mui/material/Button';
import { Box,Container, Paper, Slide } from "@mui/material";
import windowframe from "../../public/assets/netscape900.png";
import windowframe1 from "../../public/assets/netscape730.png";
import Typography from "@mui/material";
import Textmint from "./Minttext";

function Windowmint(){
    return (
        <>
            <Box
            maxWidth='md'
            sx={{
                margin:'auto',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                background: '#E9ECEF',
                zIndex: '4',
                maxWidth: '900px',
                maxHeight: '600px',
                height: '100%',
                width: '100%',
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                borderRadius: '1em',
                
            }}
            >
                <Textmint></Textmint>
            </Box>
        </>
    )
}
export default Windowmint;