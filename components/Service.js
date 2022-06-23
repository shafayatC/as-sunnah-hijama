import React from 'react';
import Image from 'next/image'
import styles from '../styles/Service.module.scss';
import { Carousel } from 'react-div-carousel';
import 'react-div-carousel/dist/index.css'
import { ScrollEffect } from 'react-easy-scroll-effect'
import 'react-easy-scroll-effect/dist/index.css'

const Service = () => {
    return (
        <div className={styles.services}>
            <div className='container'>
                <ScrollEffect id={2} animateOut={true}>
                    <div className={styles.srvTop}>
                        <h2 className='h_styleing_1'>Our <span>Service</span></h2>
                        <p className={styles.srvDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati!</p>
                    </div>
                </ScrollEffect>
                <Carousel uniqueId="id_1" item={4} indicators={true} autoplay={true}
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
                    <div className={styles.srvItem}>
                        <div className={styles.img}>
                            <Image src="/img/00.jpg" width={320} height={240} layout='fill' />
                        </div>
                        <div className={styles.itemDetail}>
                            <h4>Fire cupping</h4>
                            <p>Lorem  is simply dummy text of the printing and typesetting industry. Lorem   has been the .</p>
                            <button>Read More</button>
                        </div>
                    </div>

                    <div className={styles.srvItem}>
                        <div className={styles.img}>
                            <Image src="/img/cupping.jpg" width={320} height={240} layout='fill' />
                        </div>
                        <div className={styles.itemDetail}>
                            <h4>Fire cupping</h4>
                            <p>Lorem  is simply dummy text of the printing and typesetting industry. Lorem   has been the .</p>
                            <button>Read More</button>
                        </div>
                    </div>
                    <div className={styles.srvItem}>
                        <div className={styles.img}>
                            <Image src="/img/11.jpg" width={320} height={240} layout='fill' />
                        </div>
                        <div className={styles.itemDetail}>
                            <h4>Fire cupping</h4>
                            <p>Lorem  is simply dummy text of the printing and typesetting industry. Lorem   has been the .</p>
                            <button>Read More</button>
                        </div>
                    </div>
                    <div className={styles.srvItem}>
                        <div className={styles.img}>
                            <Image src="/img/22.jpg" width={320} height={240} layout='fill' />
                        </div>
                        <div className={styles.itemDetail}>
                            <h4>Fire cupping</h4>
                            <p>Lorem  is simply dummy text of the printing and typesetting industry. Lorem   has been the .</p>
                            <button>Read More</button>
                        </div>
                    </div>
                    <div className={styles.srvItem}>
                        <div className={styles.img}>
                            <Image src="/img/00.jpg" width={320} height={240} layout='fill' />
                        </div>
                        <div className={styles.itemDetail}>
                            <h4>Fire cupping</h4>
                            <p>Lorem  is simply dummy text of the printing and typesetting industry. Lorem   has been the .</p>
                            <button>Read More</button>
                        </div>
                    </div>
                    <div className={styles.srvItem}>
                        <div className={styles.img}>
                            <Image src="/img/cupping.jpg" width={320} height={240} layout='fill' />
                        </div>
                        <div className={styles.itemDetail}>
                            <h4>Fire cupping</h4>
                            <p>Lorem  is simply dummy text of the printing and typesetting industry. Lorem   has been the .</p>
                            <button>Read More</button>
                        </div>
                    </div>
                    <div className={styles.srvItem}>
                        <div className={styles.img}>
                            <Image src="/img/11.jpg" width={320} height={240} layout='fill' />
                        </div>
                        <div className={styles.itemDetail}>
                            <h4>Fire cupping</h4>
                            <p>Lorem  is simply dummy text of the printing and typesetting industry. Lorem   has been the .</p>
                            <button>Read More</button>
                        </div>
                    </div>
                    <div className={styles.srvItem}>
                        <div className={styles.img}>
                            <Image src="/img/22.jpg" width={320} height={240} layout='fill' />
                        </div>
                        <div className={styles.itemDetail}>
                            <h4>Fire cupping</h4>
                            <p>Lorem  is simply dummy text of the printing and typesetting industry. Lorem   has been the .</p>
                            <button>Read More</button>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Service;