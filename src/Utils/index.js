import toast from "react-hot-toast";

// Step - 2
export const getFavorites = () => {
    const favorites = localStorage.getItem('favorites');
    if(favorites) return JSON.parse(favorites);
    return [];
} 


// step -1 
export const addFavorite = phone =>{
    const favorites = getFavorites();
    const isExist = favorites.find(p => p.id === phone.id);
    if(isExist) return  toast.error('Phone Already Added To Favorites');
    favorites.push(phone)
    toast.success('Phone Added To Favorites Successfully!')
    localStorage.setItem('favorites',
        JSON.stringify(favorites))
}

// Remove
export const removeFavorites = id =>{
    const favorites = getFavorites();
    const remainingFavorites = favorites.filter(phone =>
        phone.id !== id); 
        localStorage.setItem('favorites',
            JSON.stringify(remainingFavorites))
    toast.success('Phone Removed From Favorites Successfully!')
}


// for Cart
// Step - 2
export const getCart = () => {
    const cart = localStorage.getItem('cart');
    if(cart) return JSON.parse(cart);
    return [];
} 


// step -1 
export const addToCart = phone =>{
    const cart = getCart();
    const isExist = cart.find(p => p.id === phone.id);
    if(isExist) return toast.error('Phone Already Added To Favorites');
    cart.push(phone)
    toast.success('Phone Added To Cart Successfully!')
    localStorage.setItem('cart',
        JSON.stringify(cart))
}

// Remove
export const removeCart = id =>{
    const cart = getCart();
    const remainingCart = cart.filter(phone => phone.id !== id); 
        localStorage.setItem('cart',
            JSON.stringify(remainingCart))
            toast.success('Phone Removed From Cart Successfully!')
}