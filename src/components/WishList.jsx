import { useRecoilState, useRecoilValue } from 'recoil'
import styling from '../WishList.module.css'
import { itemsAtomFamily, wishlistoptionAtom } from '../store/wishItemsState'
import { Items } from '../resources/cartItems';
import { cartItemIdAtom } from '../store/cartItemsState';


function WishList() {

    const wishlistoptions = useRecoilValue(wishlistoptionAtom);
    const wishList = wishlistoptions.map(item => <WishListOption key={item.id} title={item.title} isDefaultList={item.isDefaultList} />)
    const wishlistItems = Items.map(item => <WishListItem id={item.id} key={item.id} />);

    return (
        <>
            <div className={styling.wishlistlayout}>
                <div className={styling['wishlist-options']}>
                    {wishList}
                </div>
                <div className={styling.wishlistmenu}>
                    <div className={styling['wishList-banner']}>
                        <div className={styling.wishlisttitle}>
                            <h2 className={styling["wishlist-title"]}>Your Wish List</h2>
                            <h3 className={styling["wishlist-defaulttext"]}>Public</h3>
                        </div>
                        <div className={styling.wishlistshare}>
                            <a href=''>Send list to others</a>
                            <h3 className={styling['m-0']}>...</h3>
                        </div>
                    </div>
                    <div className={styling['wishlist-items']}>
                        {wishlistItems}
                    </div>
                </div>
            </div>
        </>
    )
}

function WishListOption({ title, isDefaultList }) {
    return (
        <>
            <div className={styling["wishlist-tile"]}>
                <h1 className={styling["wishlist-title"]}>{title}</h1>
                {isDefaultList && <h3 className={styling["wishlist-defaulttext"]}>Default List</h3>}
            </div>
        </>
    )
}

function WishListItem({ id }) {
    const [item, setItem] = useRecoilState(itemsAtomFamily(id));
    const [cartItemsId , setCartItemsId] = useRecoilState(cartItemIdAtom);
    function addToCart() {
        setItem((x) => ({
            ...x, AddedToCart: true
        }))
        setCartItemsId([...cartItemsId, id]);
    }

    function proceedToCheckout() {
        setItem((x) => ({
            ...x, AddedToCart: false
        }))
        
    }

    return (
        <>
            <div className={styling['item-tile']}>
                <div className={styling['item-details']}>
                    <img src={item.url} alt={item.url} className={styling['item-image']} />
                    <h3 className={styling['m-0']}>{item.name}</h3>
                    <h3 className={styling['m-0']}>₹ {item.price}</h3>
                </div>
                {item.AddedToCart ? <button className={styling['success-Btn']} onClick={proceedToCheckout} >Proceed to checkout</button> : <button className={styling['success-Btn']} onClick={addToCart}>Add to Cart</button>}

            </div>
        </>
    )
}

export default WishList