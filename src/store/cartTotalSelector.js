import { selector, useRecoilValue_TRANSITION_SUPPORT_UNSTABLE } from "recoil";
import { cartItemIdAtom, cartItemsSelector } from "./cartItemsState";

export const cartTotalSelector = selector({
    key : "cartTotalSelector",
    get : ({get}) =>{
        const cartitemids = get(cartItemIdAtom)
        return cartitemids.length;
    }
})

export const cartTotalAmountSelector = selector({
    key : "cartTotalAmountSelector",
    get : ({get}) =>{
        const cartItems = get(cartItemsSelector);
        let totalamount = 0;
        cartItems.forEach(item => {
            totalamount += item.price;
        });

        return totalamount;
    }
})