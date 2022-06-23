import React from 'react';
import Image from 'next/image'; 
import { Carousel } from 'react-div-carousel';
import 'react-div-carousel/dist/index.css';
import styles from '../styles/Testimonial.module.scss';

const Testimonial = () => {
    return (
        <div className={styles.testimonialbody}>
            <h3 className={styles.h_styleing_1 + ' h_styleing_1'}><i className='icon-certificate-outline underline'></i>Client <span>Feedback</span></h3>
            <div className={styles.carousel_testi}>
            <Carousel uniqueId="id_5" delay={2000} item={2} vertical={true} indicators={false}
                navigator={{
                    position: "top",
                    align: "end",
                    right: 0,
                    padding: "10px 20px",
                    fontSize: 12
                }}
            >
                <div className={styles.testimonialWrap}>
                    <div className={styles.img} >
                        <Image src="/img/avatar2.png" width={100} height={100} layout="fill" />
                    </div>
                    <div className={styles.testimonialDetail}>
                        <p className={styles.testimonial}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas vel sint, ut. Quisquam doloremque minus possimus eligendi dolore ad.</p>
                        <p className={styles.author}> - <span>Catherine Grace, </span> <small>CEO apple.inc</small></p>
                    </div>
                </div>

                <div className={styles.testimonialWrap}>
                    <div className={styles.img} >
                        <Image src="/img/avatar2.png" width={100} height={100} layout="fill"/>
                    </div>
                    <div className={styles.testimonialDetail}>
                        <p className={styles.testimonial}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas vel sint, ut. Quisquam doloremque minus possimus eligendi dolore ad.</p>
                        <p className={styles.author}> - <span>Catherine Grace, </span> <small>CEO apple.inc</small></p>
                    </div>
                </div>
                
                <div className={styles.testimonialWrap}>
                    <div className={styles.img} >
                        <Image src="/img/avatar2.png" width={100} height={100} layout="fill" />
                    </div>
                    <div className={styles.testimonialDetail}>
                        <p className={styles.testimonial}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas vel sint, ut. Quisquam doloremque minus possimus eligendi dolore ad.</p>
                        <p className={styles.author}> - <span>Catherine Grace, </span> <small>CEO apple.inc</small></p>
                    </div>
                </div>

                <div className={styles.testimonialWrap}>
                    <div className={styles.img} >
                        <Image src="/img/avatar2.png" width={100} height={70} layout="fill"/>
                    </div>
                    <div className={styles.testimonialDetail}>
                        <p className={styles.testimonial}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas vel sint, ut. Quisquam doloremque minus possimus eligendi dolore ad.</p>
                        <p className={styles.author}> - <span>Catherine Grace, </span> <small>CEO apple.inc</small></p>
                    </div>
                </div>
            </Carousel>
            </div>
        </div>
    );
};

export default Testimonial;