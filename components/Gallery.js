import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import styles from '../styles/Gallery.module.scss';

import { Carousel } from 'react-div-carousel'
import 'react-div-carousel/dist/index.css'
import { domReadyManager } from '../pages/_app';

const Gallery = () => {

    const [index, setIndex] = useState(0);
    const [sl, setSl] = useState(false);
    const [openSlider, setOpenSlider] = useState(() => () => { console.log("testing") });
    const [closeSlider, setCloseSlider] = useState(() => () => { console.log("testing") });

    const gallaryImage = [
        "/slider/gallery-lg2.jpg",
        "/slider/1.jpg",
        "/slider/2.jpg",
        "/slider/4.jpg",
        "/img/00.jpg",
        "/img/11.jpg",
        "/img/22.jpg",
        "/img/cupping.jpg",
        "/img/d1.jpg",
        "/img/d2.jpg",
        "/img/d3.jpg",
        "/img/d4.jpg",
    ]

    useEffect(() => {

        setOpenSlider(() => () => {
            const sliderParrent = document.querySelector(`.${styles.gallerySldier}`);
            sliderParrent.style.display = "block";
            setSl(true);
        })

        setCloseSlider(() => () => {
            const sliderParrent = document.querySelector(`.${styles.gallerySldier}`);
            sliderParrent.style.display = "none";
            setSl(false);
        });

    }, [])

    return (
        <div className={styles.galleryWrap}>
            <h3 className={styles.h_styleing_1 + ' h_styleing_1'}><i className='icon-picture-1 underline'></i>PHOTO <span>GALLERY</span></h3>
            <div className={styles.galleryImage}>
                {gallaryImage.map((data, index) =>

                    <div className={styles.img}>
                        <Image src={data} width={150} height={100} layout="fill" />
                        <div className={styles.image_shade}></div>
                        <div className={styles.img_icon}><i onClick={() => { openSlider(); setIndex(index) }} className='icon-picture'></i></div>
                    </div>
                )}
            </div>
            <div className={styles.gallerySldier} >
                <div className={styles.close}><i onClick={closeSlider} className='icon-cancel'></i></div>
                <div className={styles.glWrap}>
                    {sl &&
                        <Carousel uniqueId="id_12" speed={0} item={1} autoplay={false} indicators={false} index={index}
                            navigator={{
                                position: "bottom",
                                align: "center",
                                padding: "10px 20px",
                                fontSize: 30,
                                color: "#98968f",
                                index: { index }
                            }} >
                            {gallaryImage.map(data =>
                                <div className={styles.gl}><img src={data} /></div>
                            )}
                        </Carousel>
                    }


                </div>
            </div>
        </div>
    );
};

export default Gallery;