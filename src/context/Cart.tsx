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
  removeFromCart(productId: number): void;
  removeQuantity(productId: number): void;
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

  const removeFromCart = useCallback(
    (productId: number) => {
      const newProducts = addedProducts.filter(
        product => product.id !== productId,
      );

      setAddedProducts(newProducts);
    },
    [addedProducts],
  );

  useEffect(() => {
    const productsTransformed = products.map(product => ({
      ...product,
      addedToCart: 0,
      subtotal: product.price,
    }));

    setTransformProducts(productsTransformed);
  }, [products]);

  const removeQuantity = useCallback(
    (productId: number) => {
      const filteredProduct = addedProducts.find(
        product => product.id === productId,
      );

      if (filteredProduct) {
        if (filteredProduct.addedToCart >= 1) {
          filteredProduct.addedToCart -= 1;
          filteredProduct.subtotal -= filteredProduct.price;

          setAddedProducts([...addedProducts]);
        }
      }
    },
    [addedProducts],
  );

  const contextValue = useMemo(
    () => ({
      addedProducts,
      transformProducts,
      addToCart,
      isCartOpened,
      setIsCartOpened,
      removeFromCart,
      removeQuantity,
    }),
    [
      addedProducts,
      transformProducts,
      addToCart,
      isCartOpened,
      removeFromCart,
      removeQuantity,
    ],
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
