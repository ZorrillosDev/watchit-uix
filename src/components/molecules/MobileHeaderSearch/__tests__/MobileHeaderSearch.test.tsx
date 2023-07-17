import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MobileHeaderSearch } from '../MobileHeaderSearch';

describe('MobileHeaderSearch component', () => {
	test('renders correctly', () => {
	  const { getByTestId } = render(<MobileHeaderSearch value='Value' />);
	  const buttonShowSearch = getByTestId('button-search');
	  const InputSearch = getByTestId('textfield-search');
	  expect(buttonShowSearch).toBeInTheDocument();
	});
  
	test('If render search input when click show button', () => {
		const { getByTestId } = render(<MobileHeaderSearch value='Value' />);
		const buttonShowSearch = getByTestId('button-search')
		fireEvent.click(buttonShowSearch);
		const InputSearch = getByTestId('textfield-search');
		expect(InputSearch).toBeInTheDocument();
	});
  
	test('If render search input when click show button', () => {
		const { getByTestId } = render(<MobileHeaderSearch value='Value' />);
		const buttonShowSearch = getByTestId('button-search')
		fireEvent.click(buttonShowSearch);
		const InputSearch = getByTestId('textfield-search');
		expect(InputSearch).toHaveBeenCalled();
	});
});