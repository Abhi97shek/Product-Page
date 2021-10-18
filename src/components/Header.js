import React,{useState,} from "react";
import styles from '../styles/Header.module.css';
import Cart from "./Cart";
const Header = ()=>{
    
    const [show,setShow] = useState(false);
    return(
        <header className={styles.header}>
           
                <div>
                    <img src="/images/logo.svg" alt="sneakers-logo" />
                </div>
               
                    <ul className={styles.list}>
                        <li className={styles.list_li}>
                            <a href="#" className={styles.list_li_a}>Collections</a>
                        </li>
                        <li>
                            <a href="#" className={styles.list_li_a}>Men</a>
                        </li>
                        <li>
                            <a href="#" className={styles.list_li_a}>Women</a>
                        </li>
                        <li>
                            <a href="#" className={styles.list_li_a}>About</a>
                        </li>
                        <li>
                            <a href="#" className={styles.list_li_a}>Contact</a>
                        </li>
                    </ul>
             
                <div class={styles.headerRight}>
                    <img src="/images/icon-cart.svg" alt="cart logo" className={styles.cart_logo} onClick={()=>{setShow(true);}}></img>
                    <Cart show={show}/>
                     <img src="/images/image-avatar.png" allt="profile-image" className={styles.headerRight_profile}/>
                </div>
           


        </header>
           
        
    );

};


export default Header;