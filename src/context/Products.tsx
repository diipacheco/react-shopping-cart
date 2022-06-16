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
  loading: boolean;

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
  const [loading, setLoading] = useState(false);

  const fetchCategories = useCallback(async () => {
    const response = await api.get('/products/categories');
    setCategories(response.data);
  }, []);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await api.get('/products?limit=20');
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      throw new Error('erro ao carregar produtos');
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      categories,
      products,
      fetchCategories,
      fetchProducts,
      loading,
    }),
    [categories, fetchCategories, products, fetchProducts, loading],
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
