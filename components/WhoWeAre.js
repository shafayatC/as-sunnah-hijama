import React from 'react';
import styles from '../styles/WhoWe.module.scss';

import Image from 'next/image'

const WhoWeAre = () => {
    return (
        <section className={styles.whoWe_wrap + " fwidth"}>
            <div className={styles.whoWe_container + ' container'}>
                <div className={styles.ww_leftCont}>
                    <img className={styles.ww_img} src="/img/cupping.jpg" alrt="cupping therapy" width={300} height={270} layout='fill' />
                    <div className={styles.weAreAbout}>
                        <h3>Who We Are?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et magni temporibus voluptates. Iure quam laboriosam ullam omnis nulla deleniti, repellendus sequi reiciendis quas voluptatibus consectetur alias aspernatur deserunt veritatis.</p>
                        <a className='readmore' href='#'>Read More →</a>
                    </div>
                </div>
                <div className={styles.ww_righCont}>
                    <div className={styles.rightContTop}>
                        <h3 className='line_bottom'>Welcome To Our Counseling</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quia, eaque tempora eligendi facere excepturi facilis earum inventore harum dolores. Maxime, aspernatur. Voluptatum, sit.</p>
                    </div>
                    <div className={styles.rightContBottom}>
                        <div className={styles.weAreDisplay}>
                            <span>
                                <i className=' icon-comment-empty'></i>
                            </span>
                            <h4>Well Consulting</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et magni temporibus voluptates adipisicing..</p>
                            <a className='readmore' href='#'>Read More <i className='icon-right'></i></a>
                        </div>
                        
                        <div className={styles.weAreDisplay}>
                            <span>
                                <i className=' icon-comment-empty'></i>
                            </span>
                            <h4>Well Consulting</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et magni temporibus voluptates adipisicing..</p>
                            <a className='readmore' href='#'>Read More <i className='icon-right'></i></a>
                        </div>
                        
                        <div className={styles.weAreDisplay}>
                            <span>
                                <i className=' icon-comment-empty'></i>
                            </span>
                            <h4>Well Consulting</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et magni temporibus voluptates adipisicing..</p>
                            <a className='readmore' href='#'>Read More <i className='icon-right'></i></a>
                        </div>
                        
                        <div className={styles.weAreDisplay}>
                            <span>
                                <i className=' icon-comment-empty'></i>
                            </span>
                            <h4>Well Consulting</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et magni temporibus voluptates adipisicing..</p>
                            <a className='readmore' href='#'>Read More <i className='icon-right'></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;