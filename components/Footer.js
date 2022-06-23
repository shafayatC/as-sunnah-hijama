import React from 'react';
import Paralax from './Paralax';
import styles from '../styles/Footer.module.scss';
import Image from 'next/image';

const Footer = () => {
    return (
        <div id="footer">
            <Paralax paddingTop={90} paddingBottom={90} background="./img/jtp.png">
                <div className='container'>
                    <div className={styles.footerWrap}>
                        <div className={styles.ftr}>
                            <h4>As-Sunnah Hijama Center</h4>
                            <div className={styles.aboutDes}>
                                <p>introduced a built-in image component with automatic optimization capabilities, and this has been one of the most </p>
                                <div className={styles.contact}>
                                    <p><i className='icon-phone' />+88 01681509033</p>
                                    <p><i className='icon-facebook' />fb.com/assunnahhijamabd</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.ftr + " "+  styles.quicklinkWrap}>
                            <h4>Quick Links</h4>
                            <ul className={styles.quicklink}>
                                <li><i className=' icon-right' /><a href="#">About Us</a></li>
                                <li><i className=' icon-right' /><a href="#">Our Mission</a></li>
                                <li><i className=' icon-right' /><a href="#">Our Service</a></li>
                                <li><i className=' icon-right' /><a href="#">Contact Us</a></li>
                                <li><i className=' icon-right' /><a href="#">Faq</a></li>
                            </ul>
                        </div>
                        <div className={styles.ftr}>
                            <h4>News Feed</h4>
                            <div className={styles.newsfeedWrap}>
                                <div className={styles.newsfeed}>
                                    <div className={styles.img}>
                                        <Image src="/img/00.jpg" width={70} height={50} layout="fill" />
                                    </div>
                                    <div className={styles.des}>
                                        <span><i className='icon-calendar-1' /> 24th May 2020</span>
                                        <p>Reference site about Lorem Ipsum</p>
                                    </div>
                                </div>

                                <div className={styles.newsfeed}>
                                    <div className={styles.img}>
                                        <Image src="/img/11.jpg" width={70} height={50} layout="fill" />
                                    </div>
                                    <div className={styles.des}>
                                        <span><i className='icon-calendar-1' /> 24th May 2020</span>
                                        <p>Reference site about Lorem Ipsum</p>
                                    </div>
                                </div>
                                <div className={styles.newsfeed}>
                                    <div className={styles.img}>
                                        <Image src="/img/22.jpg" width={70} height={50} layout="fill" />
                                    </div>
                                    <div className={styles.des}>
                                        <span><i className='icon-calendar-1' /> 24th May 2020</span>
                                        <p>Reference site about Lorem Ipsum</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Paralax>
            <div className={styles.footerBottom}>
                <div className='container'>
                    <div className={styles.ftrSocial}>
                        <p>Copyright <i className=' icon-copyright' /> 2022. All right Reserved</p>
                        <div className={styles.social}>
                            <div className={styles.scl}>
                                <a href='#' className='icon-facebook'></a>
                                <a href='#' className='icon-twitter'></a>
                                <a href='#' className='icon-pinterest'></a>
                                <a href='#' className='icon-youtube'></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;