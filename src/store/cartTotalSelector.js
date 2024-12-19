import { selector, useRecoilValue_TRANSITION_SUPPORT_UNSTABLE } from "recoil";
import { cartItemIdAtom, cartItemsSelector } from "./cartItemsState";
import { itemsAtomFamily } from "./wishItemsState";

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
        // const cartItems = get(cartItemsSelector);
        let totalamount = 0;
        // cartItems.forEach(item => {
        //     totalamount += item.price * item.quantity;
        // });

        const ids = get(cartItemIdAtom);

        ids.forEach(id => {
            const item = get(itemsAtomFamily(id));
            totalamount += item.price * item.quantity;
        })
        
        return totalamount;
    }
})