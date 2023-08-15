import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ChallengesPopUp, { ChallengesPopUpProps } from '../ChallengesPopUp';

const setup = (props: ChallengesPopUpProps) => {
	const component = render(<ChallengesPopUp {...props} />);
	const wrapper = component.getByTestId('mobile-menu-item-wrapper');
	return { ...component, wrapper };
};
