import { atom } from "recoil";

export const wishlistoptionAtom = atom({
    key: "wishlistoptionAtom",
    default : [{
        title : "Your Wish List",
        isDefaultList : true
    }]
})