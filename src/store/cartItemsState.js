import { atom, selector } from "recoil";
import { Items } from "../resources/cartItems";


export const cartItemIdAtom = atom({
    key : "cartItemIdAtom",
    default : []
})

export const cartItemsSelector = selector({
    key : "cartItemsSelector",
    get : ({get}) =>{
        const ids = get(cartItemIdAtom);
        const cartedWishList = Items.filter((item)=>{
            return ids.includes(item.id);
        })
        return cartedWishList;
    }
})