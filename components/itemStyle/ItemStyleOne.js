import React from 'react';
import Image from 'next/image';
import styles from '../../styles/ItmeOne.module.scss'; 

const ItemStyleOne = ({image, title, description}) => {
    return (
        <div className={styles.itemOneWrap}>
            <div className={styles.img}>
            <Image src={image} width={360} height={190} layout="responsive"/>

            </div>
            <div className={styles.infoWrap}>
                <h3>{title}</h3>
                <p>{description}</p>
                <button>Read more</button>
            </div>
        </div>
    );
};

export default ItemStyleOne;