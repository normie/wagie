import React, {useState,useEffect} from 'react';
import {FaAngleDown} from 'react-icons/fa'


function ScollBtn() {
    const [showBotBtn, setShowBotBtn] = useState(true)
    
    
    
    return (
        <>
            <div className="top-to-btm">
                {" "}
                {showBotBtn && (
                <a href='#sectionTwo'>
                <FaAngleDown className='icon-position icon-style'
                />
                </a>
                )}{" "}
            </div>
        </>
    )

}

export default ScollBtn;