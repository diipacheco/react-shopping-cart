import { createContext, useContext } from 'react';

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface IProductsContextData {
  categories: string[];
  products: IProduct[];
}

const ProductsContext = createContext({} as IProductsContextData);

export function ProductsContextProvider() {
  return null;
}

export function useProducts() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('Use Products must be wrapped on ProductsProvider');
  }
  return context;
}
