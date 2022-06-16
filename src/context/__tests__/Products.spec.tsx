import { renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';

import { act } from 'react-dom/test-utils';
import { useProducts, ProductsContextProvider } from '../Products';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

describe('ProductsContext', () => {
  it('should be able to fetch categories', async () => {
    const apiResponse = [
      'electronics',
      'jewelery',
      "men's clothing",
      "women's clothing",
    ];

    apiMock.onGet('/products/categories').reply(200, apiResponse);

    const { result, waitForNextUpdate } = renderHook(() => useProducts(), {
      wrapper: ProductsContextProvider,
    });

    act(() => {
      result.current.fetchCategories();
    });

    await waitForNextUpdate();

    expect(result.current.categories).toEqual(apiResponse);
  });

  it('should be able to fetch products', async () => {
    const apiResponse = [
      {
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rating: {
          rate: 3.9,
          count: 120,
        },
      },
      {
        id: 2,
        title: 'Mens Casual Premium Slim Fit T-Shirts ',
        price: 22.3,
        description:
          'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
        category: "men's clothing",
        image:
          'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        rating: {
          rate: 4.1,
          count: 259,
        },
      },
    ];

    apiMock.onGet('/products?limit=20').reply(200, apiResponse);

    const { result, waitForNextUpdate } = renderHook(() => useProducts(), {
      wrapper: ProductsContextProvider,
    });

    act(() => {
      result.current.fetchProducts();
    });

    await waitForNextUpdate();

    expect(result.current.products).toEqual(apiResponse);
  });
});
