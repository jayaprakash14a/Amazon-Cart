import { atom, atomFamily } from "recoil";
import { Items } from "../resources/cartItems";

export const wishlistoptionAtom = atom({
    key: "wishlistoptionAtom",
    default : [{
        id: 11,
        title : "Your Wish List",
        isDefaultList : true
    }]
})

export const itemsAtomFamily = atomFamily({
    key: "itemsAtomFamily",
    default : (id) =>{
        return Items.find((item)=> item.id === id);
    }
})