import React from 'react';

import cardHeader from '../public/image-header-mobile.jpg';

import SingleStat from '../Components/SingleStat';

import {
	Container,
	Card,
	ImageContainer,
	StyledImage,
	ImageOverlay,
	StatContainer,
	TextContainer,
	MainHeading,
	Span,
	MainParagraph,
} from '../styled-components/Card.styled';

export default function Home() {
	return (
		<>
			<Container>
				<Card>
					<ImageContainer>
						<ImageOverlay />
						<StyledImage src={cardHeader} />
					</ImageContainer>
					<TextContainer>
						<MainHeading>
							Get <Span>insights</Span> that help your business grow.
						</MainHeading>
						<MainParagraph>
							Discover the benefits of data analytics and make better decisions
							regarding revenue, customer experience, and overall efficiency.
						</MainParagraph>
						<StatContainer>
							<SingleStat heading={'10k+'} stat={'COMPANIES'} />
							<SingleStat heading={'314'} stat={'TEMPLATES'} />
							<SingleStat heading={'12M+'} stat={'QUERIES'} />
						</StatContainer>
					</TextContainer>
				</Card>
			</Container>
		</>
	);
}
