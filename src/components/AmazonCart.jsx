import { useRecoilValue } from "recoil"
import { cartItemsSelector } from "../store/cartItemsState"


function AmazonCart(){
    const cartItems =  useRecoilValue(cartItemsSelector);

    const shoppingCart = cartItems.map((item)=><CartTiles cartItem={item} />);

    return (
        <>
            <div >
                {shoppingCart}
            </div>
        </>
    )
}

function CartTiles({cartItem}){
    return (
        <>
            <div>
                {cartItem.name}
            </div>
        </>
    )
}

export default AmazonCart