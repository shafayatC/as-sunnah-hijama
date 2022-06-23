import React from 'react';
import styles from '../styles/Wrap_gallery_test.module.scss'
import Gallery from './Gallery';
import Testimonial from './Testimonial';

const Wrap_gallery_test = () => {
    return (
        <div className={styles.wrapGalleryTesti}>
            <div className={styles.wrapGallery + ' container'}>
                <div className={styles.gallery}>
                    <Gallery />
                </div>
                <div className={styles.testimonial}>
                    <Testimonial />
                </div>
            </div>
        </div>
    );
};

export default Wrap_gallery_test;