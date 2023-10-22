import {useState, createContext, useContext, useEffect} from "react";

const CartContext= createContext();
const defaultCart = JSON.parse(localStorage.getItem('cart')) || [];

const CartProvider = ({children}) => {
        const [items, setItems] =useState(defaultCart);

        const addToCart = (data) => {
            setItems((prev) => [...prev, data]);
        }

        useEffect(() => {
            localStorage.setItem('cart', JSON.stringify(items))
        }, [items])

        

        const removeFromCart = (item_id) => {
            const filtered = items.filter((item) => item._id !== item_id  );
            setItems(filtered);

        }

        const values= {
            items,
            setItems,
            addToCart,
            removeFromCart,
        };

       
        

        return <CartContext.Provider value={values} >{children}</CartContext.Provider>

}

const useCart = () => useContext(CartContext);

export {useCart, CartProvider };
