import { render } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a heading', () => {
    const { getByText } = render(<Home />);

    const heading = getByText('BLUE STREAK');
    const bulletPoint1 = getByText('Imaginary pills to cure your boredom');
    const bulletPoint2 = getByText('Just imagine the pill on your hand and then you swallow it');
    const bulletPoint3 = getByText("It's okay to do that because, after allowedNodeEnvironmentFlags, it's just an imaginary product");
    const footer = getByText('contact us');

    expect(heading).toBeInTheDocument();
    expect(bulletPoint1).toBeInTheDocument();
    expect(bulletPoint2).toBeInTheDocument();
    expect(bulletPoint3).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
