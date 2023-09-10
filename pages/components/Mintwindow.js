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
            sx={{
                margin:'auto',
                display: 'flex',
                justifyContent: 'center',
                background: '#FFD700',
                zIndex: '4',
                maxWidth: '900px',
                padding: '0 0 20px 0',
                height: 'fit-content',
                width: 'fit-content',
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                border: '1px solid black',
                boxShadow: '8px 8x rgb(31, 8, 0)',
                
            }}
            >
               <Textmint></Textmint>
            </Box>
        </>
    )
}
export default Windowmint;