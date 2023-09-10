import * as React from "react";
import Button from '@mui/material/Button';
import { Grid,Box,Container, Paper, Slide } from "@mui/material";
import { keyframes } from "@mui/material";
import Typography from "@mui/material/Typography";


function Mintbar(props) {
    return (
        <>
            <Container className="mintbar-container" fluid
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: "white",
                paddingTop:'1rem !important',
                padding: '2rem',
                height:'250px',
                width: '100%',
                marginTop:'auto',
                marginBottom: 'auto',
            }}> 
                <Container>
                    <div className="mint-text">
                        <h2><span id="offset">Mint </span>your <span>Wagie</span></h2><div class="heart"></div>
                        
                    </div>
                </Container>
            </Container>
        </>
    )
}
export default Mintbar;