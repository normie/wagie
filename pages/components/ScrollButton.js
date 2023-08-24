import React, {useState,useEffect} from 'react';
import {FaAngleDown} from 'react-icons/fa'


function ScollBtn() {
    const [showBotBtn, setShowBotBtn] = useState(false)
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY>10) {
                setShowBotBtn(true);
            } else {
                setShowBotBtn(false);
            }
        });
    }, []);
    const mintContainer = document.getElementById("sectionTwo");
    const goToBot = () =>{
        mintContainer.scrollIntoView(true)
    }
    return (
        <>
            <div className="top-to-btm">
                {" "}
                {showBotBtn && (
                <FaAngleDown className='icon-position icon-style'
                onClick={goToBot}/>
                )}{" "}
            </div>
        </>
    )

}

export default ScollBtn;