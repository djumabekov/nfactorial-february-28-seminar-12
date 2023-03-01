import products from '../api/products.json';

const initialState = { products };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload) {
            return { ...product, inventory: product.inventory - 1, inCart: product.inCart + 1 };
          }
          return product;
        }),
      };
    case 'CHECKOUT':
      return {
        ...state,
        products: state.products.map((product) => {
          return { ...product, inventory: product.inventory + product.inCart, inCart: 0 };
        }),
      };
    default:
      return state;
  }
};
