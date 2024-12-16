import { atom, atomFamily } from "recoil";
import { CartItems } from "../resources/cartItems";

export const wishlistoptionAtom = atom({
    key: "wishlistoptionAtom",
    default : [{
        id: 1,
        title : "Your Wish List",
        isDefaultList : true
    }]
})

export const itemsAtomFamily = atomFamily({
    key: "itemsAtomFamily",
    default : (id) =>{
        return CartItems.find((item)=> item.id === id);
    }
})