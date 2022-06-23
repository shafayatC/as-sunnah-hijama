import React from 'react';
import styles from '../styles/Slider.module.scss'; 
import { SimpleCarouselSlider } from 'react-simple-carousel-image-slider';
import 'react-simple-carousel-image-slider/dist/index.css';

const images = [
    "https://raw.githubusercontent.com/shafayatC/react-simple-carousel-image-slider/main/src/img/1.jpg",
    "https://raw.githubusercontent.com/shafayatC/react-simple-carousel-image-slider/main/src/img/5.jpg"
];
/*
const images = [
    { url: "slider/1.jpg" },
    { url: "slider/2.jpg" },
    { url: "slider/6.jpg" },
];
*/
const Slider = () => {
    return (
        <section className={styles.sliderWrap}>
            <SimpleCarouselSlider
                images={images}
                autoplay={true}
                width="100%"
                height="650px"
                parallax={true}
            />
        </section>
    );
};

export default Slider;