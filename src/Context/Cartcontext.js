import React from 'react'

const Cartcontext = React.createContext({
    cartList: [],
    wishList: [],
    removeAllCartItems: () => {},
    addCartItem: () => {},
    addWishItem: () => {},
    removeCartItem: () => {},
    removeWishItem: () => {},
    incrementCartItemQuantity: () => {},
    decrementCartItemQuantity: () => {},
})

export default Cartcontext