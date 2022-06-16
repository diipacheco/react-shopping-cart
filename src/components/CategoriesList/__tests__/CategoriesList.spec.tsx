import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import CategoriesList from '..';

describe('<Header />', () => {
  it('should match snapshots', () => {
    const wrapper = render(
      <BrowserRouter>
        <CategoriesList />
      </BrowserRouter>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to list categories', () => {
    const { queryByTestId, findAllByTestId } = render(<CategoriesList />);

    const categoriesList = queryByTestId('categories-list') as HTMLUListElement;

    // const contentCategoriesList = (await findAllByTestId(
    //   'content-categories-list',
    // )) as HTMLLIElement[];

    expect(categoriesList.children).toHaveLength(4);
  });
});
