import { useRecoilValue } from 'recoil'
import styling from '../WishList.module.css'
import { wishlistoptionAtom } from '../store/wishItemsState'


function WishList(){

    const wishlistoptions = useRecoilValue(wishlistoptionAtom);
    const wishList = wishlistoptions.map( item => <WishListOption title={item.title} isDefaultList={item.isDefaultList} /> )

    return(
        <>
            <div className={styling.wishlistlayout}>
                <div className={styling['wishlist-options']}>
                    {wishList}
                </div>
            </div>
        </>
    )
}

function WishListOption({title, isDefaultList}){
    return (
        <>
            <div className={styling["wishlist-tile"]}>
                <h1 className={styling["wishlist-title"]}>{title}</h1>
                {isDefaultList && <h3 className={styling["wishlist-defaulttext"]}>Default List</h3>}
            </div>
        </>
    )
}

export default WishList