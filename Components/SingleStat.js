import React from 'react';
import {
	SingleStatContainer,
	StatHeading,
	Stat,
} from '../styled-components/Stats.styled';

const SingleStat = ({ heading, stat }) => {
	return (
		<SingleStatContainer>
			<StatHeading>{heading}</StatHeading>
			<Stat>{stat}</Stat>
		</SingleStatContainer>
	);
};

export default SingleStat;
