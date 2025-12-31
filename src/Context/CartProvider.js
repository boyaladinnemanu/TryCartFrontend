import {useState,useEffect } from "react";
import Cartcontext from "./Cartcontext";

const CartProvider =({children})=>{

    const [cartList,setcartList] = useState(()=>{
        const sortedlist = localStorage.getItem("CartList");
        return sortedlist? JSON.parse(sortedlist):[];
      });

      const [wishList,setwishList] = useState(()=>{
        const sortedlist = localStorage.getItem("wishList");
        return sortedlist? JSON.parse(sortedlist):[];
      });

      useEffect(()=>{
        localStorage.setItem("wishList",JSON.stringify(wishList))
      },[wishList])
    
      useEffect(()=>{
        localStorage.setItem("CartList",JSON.stringify(cartList))
      },[cartList])
      
    
      const removeAllCartItems = () => {
        setcartList([]);
        localStorage.setItem("CartList", JSON.stringify([]));
      };
    
    
      const addCartItem = (product) => {
        setcartList((cartList) => {
          const existingproduct = cartList.find((each) => each.id === product.id);
          if (existingproduct) {
            return cartList.map((each) =>
              each.id === product.id
                ? { ...each, quantity: each.quantity + 1 }
                : each
            );
          } else {
            return [...cartList, { ...product}];
          }
        });
      };

      const addWishItem = (product) => {
        setwishList((wishList) => {
          const existingproduct = wishList.find((each) => each.id === product.id);
          if (existingproduct) {
            return wishList.map((each) =>
              each.id === product.id
                ? { ...each, quantity: each.quantity + 1 }
                : each
            );
          } else {
            return [...wishList, { ...product}];
          }
        });
      };
      
    
      const removeCartItem = (id) => {
        setcartList(cartList =>
          cartList.filter(each => each.id !== id)
        );
      };

      const removeWishItem = (id) => {
        setwishList(wishList =>
          wishList.filter(each => each.id !== id)
        );
      };
    
      const incrementCartItemQuantity = (id) => {
        setcartList(cartList => 
          cartList.map(each =>
            each.id === id ? { ...each, quantity: each.quantity + 1 } : each
          )
        );
      };  
    
      const decrementCartItemQuantity = (id, quantity) => {
        if (quantity > 1) {
          setcartList(cartList =>
            cartList.map(each =>
              each.id === id ? { ...each, quantity: each.quantity - 1 } : each
            )
          );
        } else {
          setcartList(cartList =>
            cartList.filter(each => each.id !== id)
          );
        }
      };
      
    return(
        <Cartcontext.Provider value={{
            cartList,
            removeAllCartItems: removeAllCartItems,
            addCartItem: addCartItem,
            removeCartItem: removeCartItem,
            incrementCartItemQuantity: incrementCartItemQuantity,
            decrementCartItemQuantity: decrementCartItemQuantity,
            wishList,
            addWishItem:addWishItem,
            removeWishItem:removeWishItem,
          }}>
            {children}
        </Cartcontext.Provider>
    )
}

export default CartProvider