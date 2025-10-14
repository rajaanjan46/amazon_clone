import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

function reducer(state, action){
  switch(action.type){
    case 'add':{
      const found = state.items.find(i=>i.product.id===action.product.id);
      if(found){
        return { ...state, items: state.items.map(i=> i.product.id===action.product.id ? {...i, quantity: i.quantity + action.quantity } : i) };
      }
      return { ...state, items: [...state.items, { product: action.product, quantity: action.quantity }] };
    }
    case 'inc':
      return { ...state, items: state.items.map(i=> i.product.id===action.id ? {...i, quantity: i.quantity + 1 } : i) };
    case 'dec':
      return { ...state, items: state.items.map(i=> i.product.id===action.id ? {...i, quantity: Math.max(1, i.quantity - 1) } : i) };
    case 'remove':
      return { ...state, items: state.items.filter(i=> i.product.id!==action.id) };
    case 'hydrate':
      return { ...state, ...action.state };
    default:
      return state;
  }
}

export function CartProvider({ children }){
  const [state, dispatch] = useReducer(reducer, { items: [] });
  useEffect(()=>{
    const raw = localStorage.getItem('cart');
    if(raw){
      try{ dispatch({ type: 'hydrate', state: JSON.parse(raw) }); }catch(e){}
    }
  },[]);
  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(state));
  },[state]);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
export function useCart(){
  return useContext(CartContext);
}
