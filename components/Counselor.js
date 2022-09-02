import React from 'react';
import Image from 'next/image';
import styles from '../styles/Counselor.module.scss';
import { Carousel } from 'react-div-carousel';
import 'react-div-carousel/dist/index.css';

const Counselor = () => {
    return (
        <div className={styles.counselerWrap}>
            <div className='container'>
                <h2 className='h_styleing_1'><i className='icon-location underline'></i> Our<span> Counselor</span></h2>

                <Carousel uniqueId="id_3" item={4} indicators={false} autoplay={true}
                                    responsive={ [
                                        {
                                            breakPoint: 413, 
                                            item: 1, 
                                           // indicators: false,
                                            nav: false
                                        },
                                        {
                                            breakPoint: 768, 
                                            item: 2, 
                                        },
                                        {
                                            breakPoint: 992, 
                                            item: 3, 
                                        }
                                    ]
                                }
                >
                    <div className={styles.counselor}>
                        <div className={styles.img}>
                            <Image src="/img/d1.jpg" width={230} height={260} layout='fill' alt="image"/>
                        </div>
                        <div className={styles.cnsDetail}>
                            <h4>Anderson Smith</h4>
                            <p>-Counselor-</p>
                            <div className={styles.social}>
                                <a href='#'><i className='icon-facebook'></i></a>
                                <a href='#'><i className='icon-twitter'></i></a>
                                <a href='#'><i className='icon-instagram'></i></a>
                                <a href='#'><i className='icon-whatsapp'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.counselor}>
                        <div className={styles.img}>
                            <Image src="/img/d2.jpg" width={230} height={260} layout='fill' alt="image" />
                        </div>
                        <div className={styles.cnsDetail}>
                            <h4>Anderson Smith</h4>
                            <p>-Counselor-</p>
                            <div className={styles.social}>
                                <a href='#'><i className='icon-facebook'></i></a>
                                <a href='#'><i className='icon-twitter'></i></a>
                                <a href='#'><i className='icon-instagram'></i></a>
                                <a href='#'><i className='icon-whatsapp'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.counselor}>
                        <div className={styles.img}>
                            <Image src="/img/d3.jpg" width={230} height={260} layout='fill' alt="image" />
                        </div>
                        <div className={styles.cnsDetail}>
                            <h4>Anderson Smith</h4>
                            <p>-Counselor-</p>
                            <div className={styles.social}>
                                <a href='#'><i className='icon-facebook'></i></a>
                                <a href='#'><i className='icon-twitter'></i></a>
                                <a href='#'><i className='icon-instagram'></i></a>
                                <a href='#'><i className='icon-whatsapp'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.counselor}>
                        <div className={styles.img}>
                            <Image src="/img/d4.jpg" width={230} height={260} layout='fill' alt="image"/>
                        </div>
                        <div className={styles.cnsDetail}>
                            <h4>Anderson Smith</h4>
                            <p>-Counselor-</p>
                            <div className={styles.social}>
                                <a href='#'><i className='icon-facebook'></i></a>
                                <a href='#'><i className='icon-twitter'></i></a>
                                <a href='#'><i className='icon-instagram'></i></a>
                                <a href='#'><i className='icon-whatsapp'></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.counselor}>
                        <div className={styles.img}>
                            <Image src="/img/d1.jpg" width={230} height={260} layout='fill' alt="image"/>
                        </div>
                        <div className={styles.cnsDetail}>
                            <h4>Anderson Smith</h4>
                            <p>-Counselor-</p>
                            <div className={styles.social}>
                                <a href='#'><i className='icon-facebook'></i></a>
                                <a href='#'><i className='icon-twitter'></i></a>
                                <a href='#'><i className='icon-instagram'></i></a>
                                <a href='#'><i className='icon-whatsapp'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.counselor}>
                        <div className={styles.img}>
                            <Image src="/img/d2.jpg" width={230} height={260} layout='fill' alt="image"/>
                        </div>
                        <div className={styles.cnsDetail}>
                            <h4>Anderson Smith</h4>
                            <p>-Counselor-</p>
                            <div className={styles.social}>
                                <a href='#'><i className='icon-facebook'></i></a>
                                <a href='#'><i className='icon-twitter'></i></a>
                                <a href='#'><i className='icon-instagram'></i></a>
                                <a href='#'><i className='icon-whatsapp'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.counselor}>
                        <div className={styles.img}>
                            <Image src="/img/d3.jpg" width={230} height={260} layout='fill' alt="image"/>
                        </div>
                        <div className={styles.cnsDetail}>
                            <h4>Anderson Smith</h4>
                            <p>-Counselor-</p>
                            <div className={styles.social}>
                                <a href='#'><i className='icon-facebook'></i></a>
                                <a href='#'><i className='icon-twitter'></i></a>
                                <a href='#'><i className='icon-instagram'></i></a>
                                <a href='#'><i className='icon-whatsapp'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.counselor}>
                        <div className={styles.img}>
                            <Image src="/img/d4.jpg" width={230} height={260} layout='fill' alt="image"/>
                        </div>
                        <div className={styles.cnsDetail}>
                            <h4>Anderson Smith</h4>
                            <p>-Counselor-</p>
                            <div className={styles.social}>
                                <a href='#'><i className='icon-facebook'></i></a>
                                <a href='#'><i className='icon-twitter'></i></a>
                                <a href='#'><i className='icon-instagram'></i></a>
                                <a href='#'><i className='icon-whatsapp'></i></a>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Counselor;