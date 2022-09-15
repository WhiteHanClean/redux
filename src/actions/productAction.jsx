const addProduct = (newProduct) => {
  return {
    type: "SET_USER",
    payload: newProduct,
  };
};

export default {
  addProduct,
};
