import React from 'react'
import styles from '../styles/Model.modules.css';
function Model(props) {


    if(!props.show)
    {
        return null;
    }

    const changeImageHandler =(e)=>{
        const main_image=document.getElementById('full_image')
        main_image.src=e.target.src;
    };
    return (
        <div className="model">
               <div className="model-content">
                   <div className="model-header">
                       <img src="/images/icon-close.svg" alt="close-button" className="closeButton" onClick={props.onClose} ></img>
                   </div>
                   <div class="model-body">
                       <span className="icons"><img src="/images/icon-previous.svg"></img></span>
                       <img src="/images/image-product-1.jpg" alt="Product-Image-One" className="main_image" id="full_image"></img>
                       <span className="icons"><img src="/images/icon-next.svg"></img></span>
                   </div>
                   <div className="model-footer">
                   <img src="/images/image-product-1.jpg" alt="Product-1-Image" value="1" onClick={changeImageHandler} />
                    <img src="/images/image-product-2.jpg" alt="Product-2-Image" value="2" onClick={changeImageHandler} />
                    <img src="/images/image-product-3.jpg" alt="Product-3-Image" value="3" onClick={changeImageHandler} />
                    <img src="/images/image-product-4.jpg" alt="Product-4-Image" value="4" onClick={changeImageHandler}/>
                   </div>
               </div>
        </div>
    )
}

export default Model

