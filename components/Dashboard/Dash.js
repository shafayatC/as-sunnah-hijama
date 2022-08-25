import React from 'react';
import styles from '../../styles/Dashboard.module.scss';


const Dash = ({children, title}) => {
    return (
        <div id={styles.dashMenuWrap}>
        <div className={styles.dashLeft}>
            <div className={styles.logo}><img src='/logo.png' /></div>
            <div className={styles.menuList}>
                <ul className={styles.menu}>
                    <li><a href='#'><i className='icon-plus' />Theme Option</a></li>
                    <li><a href='#'><i className='icon-plus' />Edit</a></li>
                </ul>
            </div>
        </div>
        <div className={styles.dashRight}>
            <div className={styles.heading}>
                <h3>{title}</h3>
            </div>
            <div className={styles.dashContWrap}>
                <div className={styles.dashForm}>
            {children}
            </div>
                    </div>
                </div>
            </div> 
    );
};

export default Dash;