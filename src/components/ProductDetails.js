import React, { useState } from 'react'
import styles from '../styles/ProductDetails.modules.css';
function ProductDetails() {

   let [amount,setAmount] = useState(0);

    const decrementHandler =(e)=>{
        if(amount==0)
        {
           return 0;
        }
        amount=amount-1;
        setAmount(amount);

        
    };
    const incrementHandler =(e)=>{
      
        amount=amount+1;
        setAmount(amount);

        
    };
    return (
            <div class={styles.product_details}>
                <div class="header">
                    <h3>Sneaker Company</h3>
                </div>
                <h2 class="title">
                        Fall Limited Edition<br/> Sneakers
                </h2>
                <p class="description">
                    These low-profile sneakers are your perfect casual wear <br/>
                    companion. Featuring a durable rubber outer sole, they'll <br/>
                    withstand everything the weather can offer.
                </p>
                <div class="Amount">
                    <span class="discount">
                    <h3 class="discount_main">$125.00</h3>
                    <h5 class="discount_percentage">50%</h5>
                    </span>    
                </div>   
                <h3 class="Main_Price"><s>$250.00</s></h3>
                <div class="button">
                    <div class="noButton">
                        <div className="decrementButton" onClick={decrementHandler}>
                            <img src="/images/icon-minus.svg" alt="Minus logo" ></img>
                        </div>
                    
                        <h2>{amount}</h2>  
                        <div className="decrementButton" onClick={incrementHandler}>    
                            <img src="/images/icon-plus.svg" alt="Plus Logo" ></img>
                        </div>
                    </div>
                    <button class="cartButton">
                        <img src="/images/icon-cart.svg" alt="cart-icon" />
                        <span>Add to cart</span>
                    </button>
                </div> 
            </div>
    )
}

export default ProductDetails
