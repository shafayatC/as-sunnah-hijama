import React from 'react';
import styles from '../styles/Paralax.module.scss'; 

const Paralax = ({background, paddingTop, paddingBottom, children}) => {
    return (
        <div className={styles.paralax_wrap} style={{
            backgroundImage: `url(${background})`, paddingTop: paddingTop+"px", paddingBottom: paddingBottom+"px"}}>
            {children}
        </div>
    );
};

export default Paralax;