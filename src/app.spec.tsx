import React from 'react';
import { render } from '@testing-library/react-native';

import { App } from './app';

describe('Test component <App />', () => {
  it('Should App exists', () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });

  it('Should text into tag Text is "Test base App"', () => {
    const { getByTestId } = render(<App />);

    const text = getByTestId('text-base');
    expect(text).toHaveTextContent('Test base App');
  });
});
