import { useRecoilCallback, useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil"
import { cartItemIdAtom } from "../store/cartItemsState"
import styling from '../AmazonCart.module.css'
import { cartTotalAmountSelector, cartTotalSelector } from "../store/cartTotalSelector";
import { itemsAtomFamily } from "../store/wishItemsState";
import ReactModal from "react-modal";
import { useState } from "react";

ReactModal.setAppElement('#root');

function AmazonCart(){
    const cartItemIds =  useRecoilValue(cartItemIdAtom);
    const cartItemsCount = useRecoilValue(cartTotalSelector)
    const cartItemsAmount = useRecoilValue(cartTotalAmountSelector);
    const shoppingCart = cartItemIds.map((id)=><CartTiles key={id} id={id} />);
    

    return (
        <>
            <div className={styling.amazoncart}>
                <div className={styling.shoppingcart}>
                    <h2 className={styling['m-0']}>Shopping Cart</h2>
                    {shoppingCart.length > 0 ? shoppingCart : "Cart is empty...."}
                </div>
                <div className={styling.ordersummary}>
                    <h3>Order Summary</h3>
                    <div className={styling.orderItems}>
                        <span>Items ({cartItemsCount}):</span>
                        <span>₹{cartItemsAmount}</span>
                    </div>
                    <div className={styling.orderItems}>
                        <h3>Order Total: </h3>
                        <h3>₹{cartItemsAmount}</h3>
                    </div>
                    <SuccessPopUp cartItemsAmount={cartItemsAmount} />
                </div>
            </div>
        </>
    )
}

function CartTiles({id}){
    const [cartItem, setCartItem] = useRecoilState(itemsAtomFamily(id));
    const [cartItemsId , setCartItemsId] = useRecoilState(cartItemIdAtom);

    function deleteFromCart(){

       setCartItemsId((prev)=> prev.filter((id)=> id != cartItem.id));
       setCartItem((prev)=>({
        ...prev, "AddedToCart": false, "quantity":0
       }))
    }

    function increaseQuantity(){
        setCartItem((prev)=> ({...prev, "quantity": prev.quantity + 1}))
    }

    function decreaseQuantity(){
        setCartItem((prev)=> ({...prev, "quantity": prev.quantity - 1}))
    }

    return (
        <>
            <div className={styling.carttile}>
                <img src={cartItem.url} alt={cartItem.url} className={styling['item-image']} />
                <div className={styling.itemdetails}>
                    <div className={styling.item}>
                        <h4 className={styling['m-0']}>{cartItem.name}</h4>
                        <span>{cartItem.instock ? "In stock": "Out of stock"}</span> 
                        <div className={styling.quantitycontainer}>
                            <button onClick={decreaseQuantity} disabled ={cartItem.quantity <= 1} >-</button>
                            {cartItem.quantity}
                            <button onClick={increaseQuantity} >+</button>
                        </div>
                        <button className={styling["link-btn"]} onClick={deleteFromCart} >Delete</button>
                    </div>
                    <h3 className={styling['m-0']}>₹{cartItem.price}</h3>
                </div>
            </div>
        </>
    )
}

function SuccessPopUp({cartItemsAmount}){
    const [isModalOpen, SetIsModalOpen] = useState(false);
    const ids = useRecoilValue(cartItemIdAtom);
    const setIds = useSetRecoilState(cartItemIdAtom);
    const [value, setValue] = useState(cartItemsAmount);

    const purchaseCart = useRecoilCallback(({set})=>()=>{
        ids.forEach((id)=>{
            set(itemsAtomFamily(id) , (prev)=>(
                {...prev, "AddedToCart": false, "quantity":0}
            ));
        })
        setIds([]);
        popupToggle();
    })
    function popupToggle(){
        SetIsModalOpen((prev)=> !prev);
    }

    return (
        <>
        <div>
            <button className={styling["success-btn"]} onClick={purchaseCart} disabled={cartItemsAmount<=0}>Proceed to Buy</button>
        </div>
        <ReactModal isOpen={isModalOpen} onRequestClose={popupToggle} style={{
            backgroundColor: '#000000bf',
            content:{
                height: '220px',
                width: '440px',
                margin: '1px auto',
                borderRadius: '8px',
                inset: '200px'
            }
        }} >
            <div>
                <h1>Purchase successful!</h1>
                <div>Thank you for your purchase. Your order has been successfully processed.</div>
                <h4>Total Amount: ₹{value}</h4>
                <button onClick={popupToggle} className={styling.closeBtn}>Close</button>
            </div>
        </ReactModal>
        </>
    )
}

export default AmazonCart