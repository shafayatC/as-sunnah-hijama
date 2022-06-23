import React from 'react';
import styles from '../styles/ThreeItem.module.scss';
import ItemStyleOne from './itemStyle/ItemStyleOne';

const ThreeItem = () => {
    
    return (
        <section className={styles.itemWrap + " container"}>
            <ItemStyleOne image='slider/1.jpg' title="Stress, anxiety and worry" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero omnis unde nesciunt?"/>
            <ItemStyleOne image='slider/1.jpg' title="Marriage/family difficulties" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero omnis unde nesciunt?"/>
            <ItemStyleOne image='slider/1.jpg' title="Bereavement, grief and loss" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero omnis unde nesciunt?"/>
        </section>
    );
};

export default ThreeItem;