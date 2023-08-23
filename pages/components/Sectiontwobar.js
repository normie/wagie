import * as React from "react";
import Button from '@mui/material/Button';
import { Grid,Box,Container, Paper, Slide } from "@mui/material";
import { keyframes } from "@mui/material";
import officebg from "../../public/assets/office.png"
import sweatshop from "../../public/assets/sweatshop.png"
import Typography from "@mui/material/Typography";


function Mintbar(props) {
    return (
        <>
            <Container className="mintbar-container" fluid
            sx={{
                color: "white",
                padding: '2rem',
                height:'250px',
                marginTop:'auto',
                marginBottom: 'auto',
            }}> 
                <Container>
                    <div className="mint-text">
                        <h2><span id="offset">Wa</span>gie</h2><div class="heart"></div>
                        
                    </div>
                </Container>
            </Container>
        </>
    )
}
export default Mintbar;