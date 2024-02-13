import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SliderVolumen, { SliderVolumenProps } from '../SliderVolumen';

describe('SliderVolumen component', () => {
	test('renders correctly', () => {
	  const { getByTestId } = render(<SliderVolumen defaultVolume={0} alwaysShow={true} />);
	  const buttonShowSearch = getByTestId('button-show-slider');
	  expect(buttonShowSearch).toBeInTheDocument();
	});
  
	test('If render search input when click show button', () => {
		const { getByTestId } = render(<SliderVolumen defaultVolume={0} alwaysShow={false}/>);
		const buttonShowSearch = getByTestId('button-show-slider')
		fireEvent.click(buttonShowSearch);
		const InputSearch = getByTestId('slider-volumen');
		expect(InputSearch).toBeInTheDocument();
	});
  
	test('If render search input when click show button', () => {
		const { getByTestId } = render(<SliderVolumen defaultVolume={0} alwaysShow={false}/>);
		const buttonShowSearch = getByTestId('button-show-slider')
		fireEvent.click(buttonShowSearch);
		const InputSearch = getByTestId('slider-volumen');
		expect(InputSearch).toHaveBeenCalled();
	});
});
