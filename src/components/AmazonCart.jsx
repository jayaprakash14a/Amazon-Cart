import { useRecoilValue } from "recoil"
import { cartItemsSelector } from "../store/cartItemsState"
import styling from '../AmazonCart.module.css'
import { cartTotalAmountSelector, cartTotalSelector } from "../store/cartTotalSelector";

function AmazonCart(){
    const cartItems =  useRecoilValue(cartItemsSelector);
    const cartItemsCount = useRecoilValue(cartTotalSelector)
    const cartItemsAmount = useRecoilValue(cartTotalAmountSelector);
    const shoppingCart = cartItems.map((item)=><CartTiles key={item.id} cartItem={item} />);

    return (
        <>
            <div className={styling.amazoncart}>
                <div className={styling.shoppingcart}>
                    <h2 className={styling['m-0']}>Shopping Cart</h2>
                    {shoppingCart}
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
                </div>
            </div>
        </>
    )
}

function CartTiles({cartItem}){
    return (
        <>
            <div className={styling.carttile}>
                <img src={cartItem.url} alt={cartItem.url} className={styling['item-image']} />
                <div className={styling.itemdetails}>
                    <div className={styling.item}>
                        <h4 className={styling['m-0']}>{cartItem.name}</h4>
                        <span>{cartItem.instock ? "In stock": "Out of stock"}</span>    
                    </div>
                    <h3 className={styling['m-0']}>₹{cartItem.price}</h3>
                </div>
            </div>
        </>
    )
}

export default AmazonCart