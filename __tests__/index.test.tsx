import { render } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a heading', () => {
    const { getByText } = render(<Home />);

    const heading = getByText('Home');

    expect(heading).toBeInTheDocument();
  });
});
