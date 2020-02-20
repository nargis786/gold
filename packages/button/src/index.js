/** @jsx jsx */

import React from 'react';
import { jsx } from 'react';

const Button = ({ onClick, children, isSelected }) => (
	<button
		css={{
			border: 0,
			backgroundColor: isSelected ? 'rebeccapurple' : 'hotpink',
			color: isSelected ? 'white' : 'black',
			padding: '12px 24px',
			margin: '12px',
			borderRadius: '3px',
		}}
		onClick={onClick}
	>
		{children}
	</button>
);

export default Button;
