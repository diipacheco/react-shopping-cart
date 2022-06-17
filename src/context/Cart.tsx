import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
  Dispatch,
  SetStateAction,
} from 'react';
import { IProduct, useProducts } from './Products';

interface AddedProduct extends IProduct {
  addedToCart: number;
  subtotal: number;
}

interface ICartContextData {
  // entities
  addedProducts: AddedProduct[];
  isCartOpened: boolean;

  // functions
  addToCart(productId: number): void;
  setIsCartOpened: Dispatch<SetStateAction<boolean>>;
}

export const CartContext = createContext({} as ICartContextData);

interface ICartContextProviderProps {
  children: JSX.Element;
}

export function CartContextProvider({ children }: ICartContextProviderProps) {
  const { products } = useProducts();
  const [addedProducts, setAddedProducts] = useState([] as AddedProduct[]);
  const [transformProducts, setTransformProducts] = useState(
    [] as AddedProduct[],
  );
  const [isCartOpened, setIsCartOpened] = useState(false);

  const addToCart = useCallback(
    (productId: number) => {
      const itemToAdd = transformProducts.find(
        product => product.id === productId,
      );
      const existedAddedItem = addedProducts.find(
        product => productId === product.id,
      );

      if (existedAddedItem) {
        if (itemToAdd) {
          itemToAdd.addedToCart += 1;
          if (itemToAdd.addedToCart >= 1) {
            itemToAdd.subtotal += itemToAdd.price;
          }

          setAddedProducts([...addedProducts]);
          setIsCartOpened(true);
        }
      } else if (itemToAdd) {
        itemToAdd.addedToCart = 1;
        setAddedProducts([...addedProducts, itemToAdd]);
        setIsCartOpened(true);
      }
    },
    [addedProducts, transformProducts],
  );

  useEffect(() => {
    const productsTransformed = products.map(product => ({
      ...product,
      addedToCart: 0,
      subtotal: product.price,
    }));

    setTransformProducts(productsTransformed);
  }, [products]);

  const contextValue = useMemo(
    () => ({
      addedProducts,
      transformProducts,
      addToCart,
      isCartOpened,
      setIsCartOpened,
    }),
    [addedProducts, transformProducts, addToCart, isCartOpened],
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
