import React from 'react';
import styles from '../../styles/ItmeOne.module.scss'; 

const ItemStyleOne = ({image, title, description}) => {
    return (
        <div className={styles.itemOneWrap}>
            <img src={image}/>
            <div className={styles.infoWrap}>
                <h3>{title}</h3>
                <p>{description}</p>
                <button>Read more</button>
            </div>
        </div>
    );
};

export default ItemStyleOne;