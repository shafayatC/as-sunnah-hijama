import React from 'react';
import Paralax from './Paralax';
import styles from '../styles/Report.module.scss';
import Count from './Count';

const Report = () => {
    return (
        <>
            <Paralax paddingTop={90} paddingBottom={90} background="./img/pr2.jpg">
                <div className="container">
                    <div className={styles.reportWrap}>

                        <div className={styles.report}>
                            <i className='icon-emo-happy'></i>
                            <span><Count number={300}/></span>
                            <p>Happy Clients</p>
                        </div>
                        <div className={styles.report}>
                            <i className='icon-plane'></i>
                            <span><Count number={200} speed={100}/></span>
                            <p>Success Story</p>
                        </div>
                        <div className={styles.report}>
                            <i className='icon-user-add-outline'></i>
                            <span><Count number={99} speed={1000}/></span>
                            <p>Our COUNSELOR</p>
                        </div>
                        <div className={styles.report}>
                            <i className='icon-globe'></i>
                            <span><Count number={9900} speed={5}/></span>
                            <p>SERVICE POINTS</p>
                        </div>
                    </div>
                </div>
            </Paralax>
        </>
    );
};

export default Report;