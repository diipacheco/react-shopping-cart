import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import CategoriesList from '..';

jest.mock('../../../context/Products', () => ({
  useProducts: () => ({
    categories: [
      'electronics',
      'jewelery',
      "men's clothing",
      "women's clothing",
    ],
    products: [],
    fetchCategories: jest.fn(),
  }),
}));

describe('<CategoriesList />', () => {
  it('should match snapshots', () => {
    const wrapper = render(
      <BrowserRouter>
        <CategoriesList />
      </BrowserRouter>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to list categories', async () => {
    const { queryByTestId, findAllByTestId } = render(<CategoriesList />);

    const categoriesList = queryByTestId('categories-list') as HTMLUListElement;

    const contentCategoriesList = (await findAllByTestId(
      'content-categories-list',
    )) as HTMLLIElement[];

    expect(categoriesList.children).toHaveLength(4);
    expect(contentCategoriesList[0].innerHTML).toBe('electronics');
  });
});
