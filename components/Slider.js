import React from 'react';
import styles from '../styles/Slider.module.scss'; 
import { SimpleCarouselSlider } from 'react-simple-carousel-image-slider';
import 'react-simple-carousel-image-slider/dist/index.css';
/*
const images = [
    "https://raw.githubusercontent.com/shafayatC/react-simple-carousel-image-slider/main/src/img/1.jpg",
    "https://raw.githubusercontent.com/shafayatC/react-simple-carousel-image-slider/main/src/img/5.jpg"
];
const images = [
    { url: "/slider/new/1.jpg" },
    { url: "/slider/new/2.jpg" },
    { url: "/slider/new/3.jpg" },
];

*/

const images = [
    "slider/new/1.jpg",
    "slider/new/4.jpg",
    "slider/new/3.jpg"
];
const Slider = () => {
    return (
        <section className={styles.sliderWrap}>
            <SimpleCarouselSlider
                images={images}
                autoplay={true}
                width="100%"
                height="650px"
                parallax={true}
                responsive={[
                    {
                      breakPoint: 420,
                      height: "400px",
                    },
                    {
                      breakPoint: 600,
                      height: "500px",
                    }
                  ]}
            />
        </section>
    );
};

export default Slider;