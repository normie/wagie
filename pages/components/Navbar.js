import React, {useState,useEffect} from 'react';
//import { Button } from './Button';
import twitterLogo from '../../public/assets/logo-black.png'
import telegramLogo from '../../public/assets/Telegram_logo.png'
import fresco150 from '../../public/assets/fresco150.png'
import discordLogo from '../../public/assets/discord-mark-black.png'
import openseaLogo from '../../public/assets/opensea-logo.png'
import { Typography } from '@mui/material';
import { Container,Button} from '@mui/material';


function HeaderNavbar() {
    const openNewTab = (url) => {
        window.open(url, "_black", "noreferrer");
    }
    /*const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => { setClick(!click); };
    const closeMobileMenu = () => { setClick(false)};

    const showButton = () => {};
    */

    return (
        <>
            <Container className='header' maxWidth="false"
            sx={{
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"center",
                position:"relative",
                padding:"2rem",
                flexShrink: "2",
                flexwrap: "wrap",
            }}
            >
                
                    <div className="title-container" >
                        Fresco Corporation
                    </div>
                    
                        <div className='navbar-container'>
                            <ul className="nav-menu">
                                <li>
                                    <Button 
                                    onClick={() => {
                                        openNewTab("https://twitter.com/FrescoCorp")
                                    }}
                                    sx={{
                                        minWidth: '32px',
                                        color: 'black',
                                    }}>
                                    <div className="nav-icon">
                                        <img className="img-icon" src={twitterLogo} alt ="twitter"/>
                                    </div>
                                    </Button>
                                </li>
                                <li>
                                    <Button sx={{
                                        minWidth: '32px',
                                        color: 'black',
                                    }}>
                                    <div className ="nav-icon">
                                        <img className="img-icon" src={telegramLogo} alt="telegram"></img>
                                    </div>
                                    </Button>
                                </li>
                                <li>
                                    <Button sx={{
                                        minWidth: '32px',
                                        color: 'black',
                                    }}>
                                    <div className= "nav-icon">
                                        <img className= "img-icon" src={discordLogo} alt="discord"></img>
                                    </div>
                                    </Button>
                                </li>
                                <li>
                                    <Button sx={{
                                        minWidth: '32px',
                                        color: 'black',
                                    }}>
                                    <div className='nav-icon'>
                                        <img className= "img-icon" src={openseaLogo} alt='MarketPlace'></img>
                                    </div>
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    
            </Container>
        </>
    )
}

function RedirectPage() {
    React.useEffect(() => {
        window.location.replace('https://twitter.com/FrescoCorp')
    },[])
}

export default HeaderNavbar;