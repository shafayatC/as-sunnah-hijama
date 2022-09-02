import React from 'react';
import styles from '../../styles/Dashboard.module.scss';
import Link from 'next/link';


const Dash = ({ children, title }) => {
    return (
        <div id={styles.dashMenuWrap}>
            <div className={styles.dashLeft}>
                <div className={styles.logo}>
                    <Link href="/dashboard"><a><img src='/logo.png' /></a>

                    </Link>
                </div>
                <div className={styles.menuList}>
                    <ul className={styles.menu}>
                        <li>
                            <Link href="/dashboard/slideroption">
                                <a><i className='icon-plus' />Add Slider</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/sliderall">
                                <a><i className='icon-plus' />All Slider</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/themeoption">
                                <a><i className='icon-plus' />Theme Option</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/weare">
                                <a><i className='icon-plus' />We Are</a>
                            </Link>
                        </li>
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