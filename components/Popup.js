import React, { useEffect } from 'react';
import styles from '../styles/Popup.module.scss';

const Popup = ({ msg, type }) => {

    useEffect(()=>{

        const popupDiv = document.getElementById("popup");

        var x = (window.innerWidth / 2)- (popupDiv.clientWidth/2);
        var y = (window.innerHeight / 2) -(popupDiv.clientHeight/2);

        popupDiv.style.top = y +"px"; 
        popupDiv.style.left = x +"px"; 

        if(type == "success"){
            popupDiv.classList.add(styles.success)
        }else if(type == "danger"){
            popupDiv.classList.add(styles.danger)
        }else if(type == "warning"){
            popupDiv.classList.add(styles.warning)
        }

        setTimeout(()=>{
            popupDiv.style.visibility = "hidden"; 
            popupDiv.style.opacity = 0; 
        },3000)

    },[])

    return (
        <>
            <div id='popup' className={styles.popup} >
                <p>{msg}</p>
            </div>
        </>
    );
};

export default Popup;