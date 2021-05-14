export const initialState = {
  basket: [],
};

export const getBasketPrice = (basket) =>
  basket?.reduce((totalPrice, item) => totalPrice + item.price, 0);

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};
