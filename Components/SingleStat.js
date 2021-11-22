import React from 'react';

import styled from 'styled-components';

const SingleStat = ({ heading, stat }) => {
	const SingleStatContainer = styled.div`
		@media (min-width: 500px) {
			display: flex;
			flex-direction: column;
		}
	`;

	const StatHeading = styled.h1`
		font-family: 'Inter', sans-serif;
		font-weight: 700;
		font-size: 1.6rem;
		text-align: center;
		color: hsl(0, 0%, 100%);
		margin-bottom: 0;
		margin-top: 1rem;

		@media (min-width: 500px) {
			text-align: left;
		}
	`;

	const Stat = styled.p`
		font-family: 'Lexend Deca', sans-serif;
		font-weight: 400;
		font-size: 14px;
		text-align: center;
		color: hsla(0, 0%, 100%, 0.6);
		margin-top: 5px;
	`;
	return (
		<SingleStatContainer>
			<StatHeading>{heading}</StatHeading>
			<Stat>{stat}</Stat>
		</SingleStatContainer>
	);
};

export default SingleStat;
