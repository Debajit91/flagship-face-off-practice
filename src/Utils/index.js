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
    if(isExist) return;
    favorites.push(phone)
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
}