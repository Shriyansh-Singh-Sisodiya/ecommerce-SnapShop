import React, { createContext, useState } from 'react';

const CartsContext = createContext({});

export function CartsStore({ children }) {
  const [carts, setCarts] = useState([]);

  const addCartHandler = (product) => {
    const existingItem = carts.find(item => item.id === product.id);
    if (existingItem) {
      const updatedCarts = carts.map(item =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: (item.quantity + 1) * item.price,
            }
          : item
      );
      setCarts(updatedCarts);
    } else {
      setCarts([
        ...carts,
        {
          ...product,
          quantity: 1,
          totalPrice: product.price,
        },
      ]);
    }
  };

  const increaseQuantity = (id) => {
    const updatedCarts = carts.map(item =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: (item.quantity + 1) * item.price,
          }
        : item
    );
    setCarts(updatedCarts);
  };

  const decreaseQuantity = (id) => {
    const updatedCarts = carts.map(item => {
      if (item.id === id) {
        const newQty = item.quantity > 1 ? item.quantity - 1 : 1;
        return {
          ...item,
          quantity: newQty,
          totalPrice: newQty * item.price,
        };
      }
      return item;
    });
    setCarts(updatedCarts);
  };

  const getTotalAmount = () => {
    return carts.reduce((sum, item) => sum + item.totalPrice, 0);
  };

  return (
    <CartsContext.Provider value={{ addCartHandler, carts, increaseQuantity, decreaseQuantity, getTotalAmount }}>
      {children}
    </CartsContext.Provider>
  );
}

export { CartsContext };
export default CartsStore;
