import { selector } from "recoil";
import { cartItemIdAtom } from "./cartItemsState";

export const cartTotalSelector = selector({
    key : "cartTotalSelector",
    get : ({get}) =>{
        const cartitemids = get(cartItemIdAtom)
        return cartitemids.length;
    }
})