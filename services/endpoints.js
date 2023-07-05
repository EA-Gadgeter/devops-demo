const API = import.meta.env.VITE_API;

const endPoints = {
  products: {
    getProduct: (id) => `${API}/api/v1/products/${id}`,
    getProducts: (limit, offset) => `${API}/api/v1/products?limit=${limit}&offset=${offset}`,
    addProduct: `${API}/api/v1/products`,
    updateProduct: (id) => `${API}/api/v1/products/${id}`,
    deleteProduct: (id) => `${API}/api/v1/products/${id}`,
  },

  categories: {
    getCategories: `${API}/api/v1/categories`,
    getCategorie: (id) => `${API}/api/v1/categories/${id}`,
  },
};

export default endPoints;