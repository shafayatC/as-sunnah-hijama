import React from 'react';
import styles from '../styles/BlogOne.module.scss';
import Paralax from './Paralax';

const BlogOne = () => {
    return (
        <>
            <Paralax paddingTop={90} paddingBottom={90} background="./img/pr.jpg">
                <div className='container'>
                    <div className={styles.contentWrap}>
                        <h2 className='h_styleing_1'>BE SMART, HELP <span>YOURSELF NOW</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis totam, laudantium officia praesentium expedita omnis unde tempora beatae, modi, sequi quis. Est quas corporis, nobis aperiam cumque minima libero rem, itaque quo vitae odit?</p>
                        <button className='button_style'>Read More</button>
                    </div>
                </div>
            </Paralax>

        </>
    );
};

export default BlogOne;