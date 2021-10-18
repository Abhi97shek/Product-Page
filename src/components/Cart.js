import React,{useRef} from 'react'
import styles from '../styles/Cart.modules.css';
function Cart(props) {
    const ref=useRef();
    console.log(ref.current);
    if(!props.show)
        {
            return null;
        }

    return (
        <div className="cart-container" ref={ref}>
            <div className="cart-head">
                <h4>Cart</h4>
            </div>
            <div className="cart-body">
                <p>Your cart is empty</p>
            </div>
            
        </div>
    )
}

export default Cart;
