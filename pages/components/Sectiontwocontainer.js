import * as React from "react";
import Button from '@mui/material/Button';
import { Grid,Box,Container, Paper, Slide } from "@mui/material";
import { keyframes } from "@mui/material";
import Windowmint from "./Mintwindow";


function SectiontwobgContainer(props) {
    
    return (
        <>
            <div  className="section-two-bg" id="sectionTwo">
                {props.children}</div>
        </>
    )
}

export default SectiontwobgContainer;