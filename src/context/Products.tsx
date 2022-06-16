import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import api from '../services/api';

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
  // entities
  categories: string[];
  products: IProduct[];

  // functions
  fetchCategories(): Promise<void>;
  fetchProducts(): Promise<void>;
}

const ProductsContext = createContext({} as IProductsContextData);

interface IProductsContextProviderProps {
  children: JSX.Element;
}

export function ProductsContextProvider({
  children,
}: IProductsContextProviderProps) {
  const [categories, setCategories] = useState([] as string[]);
  const [products, setProducts] = useState([] as IProduct[]);

  const fetchCategories = useCallback(async () => {
    const response = await api.get('/products/categories');
    setCategories(response.data);
  }, []);

  const fetchProducts = useCallback(async () => {
    const response = await api.get('/products');
    setProducts(response.data);
  }, []);

  const contextValue = useMemo(
    () => ({
      categories,
      products,
      fetchCategories,
      fetchProducts,
    }),
    [categories, fetchCategories, products, fetchProducts],
  );

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);
  return context;
}
