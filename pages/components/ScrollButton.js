import React, {useState,useEffect} from 'react';
import {FaAngleDown,FaAngleUp} from 'react-icons/fa';
import Link from 'next/link';


function ScollBtn() {
    const [showBotBtn, setShowBotBtn] = useState(true)
    
    
    
    return (
        <>
            <div className="top-to-btm">
                <Link href='/'>
                <FaAngleUp className='icon-position-top icon-style'/>
                </Link>
                <Link href='#sectionTwo'>
                <FaAngleDown className='icon-position icon-style'/>
                </Link>
            </div>
        </>
    )

}

export default ScollBtn;