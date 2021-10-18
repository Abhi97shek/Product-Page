import React from 'react'
import styles from "../styles/MainSection.module.css";
import ProductImage from './ImageChooser'
import Model from './Model';
import ProductDetails from './ProductDetails'
function MainSection() {
    return (
        <div className={styles.container}>
         <ProductImage />
         
        <ProductDetails/>

        </div>
       

        
    )
}

export default MainSection
