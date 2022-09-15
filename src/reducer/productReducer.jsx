const initialState = {
  products: [
    {
      name: "аниме фигурка",
      price: 5000,
      id: 1,
    },
    {
      name: "manga вороны",
      price: 4000,
      id: 2,
    },
    {
      name: "цепи",
      price: 1000,
      id: 3,
    }
  ],
};

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case "addProduct":
      return { ...state, products: [state.products, action.payload] };
    case "removeProduct":
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}