import React,{useState} from 'react'
import styles from '../styles/ImageChooser.module.css';
import Model from './Model';
function ProductImage() {

    const [show,setShow] = useState(false);
    const changeImageHandler =(e)=>{
        const main_image=document.getElementById('full_product_image');
        main_image.src=e.target.src;
    };
    const ModelShowHandler=()=>{
        setShow(true);
    };
    return (
        <div>
            <div className={styles.Main_Image}>
                <img id="full_product_image" src="/images/image-product-1.jpg" alt="Product-image" onClick={ModelShowHandler}></img>
            </div>
            <Model show={show} onClose={()=>setShow(false)}/>
            <div className={styles.Image_Gallery}>

                <img src="/images/image-product-1.jpg" alt="Product-1-Image"  onClick={changeImageHandler} />
                <img src="/images/image-product-2.jpg" alt="Product-2-Image" onClick={changeImageHandler} />
                <img src="/images/image-product-3.jpg" alt="Product-3-Image"  onClick={changeImageHandler} />
                <img src="/images/image-product-4.jpg" alt="Product-4-Image"  onClick={changeImageHandler} />
            </div>
        </div>
    )
}

export default ProductImage;
