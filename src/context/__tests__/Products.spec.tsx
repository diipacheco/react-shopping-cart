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
});
