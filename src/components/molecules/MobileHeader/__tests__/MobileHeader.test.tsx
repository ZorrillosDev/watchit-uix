import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MobileHeader, { MobileHeaderProps } from '../MobileHeader';

const setup = (props: MobileHeaderProps) => {
	const component = render(<MobileHeader {...props} />);
	const wrapper = component.getByTestId('mobile-menu-item-wrapper');
	return { ...component, wrapper };
};

describe('MobileMenuItem', () => {
	it('renders without crashing', () => {
		setup({
			title: 'Item'
		});
	});

	it('calls onClick function when clicked', () => {
		const onClick = jest.fn();
		const { wrapper } = setup({
			title: 'Item',
		});
		fireEvent.click(wrapper);
		expect(onClick).toHaveBeenCalled();
	});

	it('renders active state correctly', () => {
		const { getByText } = setup({
			title: 'Item',
		});
		const text = getByText('Item');
		expect(text).toHaveStyle('color: #D1D2D3');
	});
});
