import React from 'react';
import styles from '../../styles/Dashboard.module.scss';

export default function dashboard() {
    return (
        <>
            <div id={styles.dashMenuWrap}>
                <div className={styles.dashLeft}>
                    <div className={styles.logo}><img src='/logo.png' /></div>
                    <div className={styles.menuList}>
                        <ul className={styles.menu}>
                            <li><a href='#'><i className='icon-plus' />New Post</a></li>
                            <li><a href='#'><i className='icon-plus' />Edit</a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.dashRight}>
                    <div className={styles.heading}>
                        <h3>Blog Post</h3>
                    </div>
                    <div className={styles.dashContWrap}>
                        <div className={styles.dashForm}>
                            <form className={styles.form}>
                                <input placeholder='title'/>
                                <textarea placeholder='Description'></textarea>
                                <button>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

