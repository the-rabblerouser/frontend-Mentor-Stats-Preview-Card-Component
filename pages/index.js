import Image from 'next/image';

import styled from 'styled-components';

import cardHeader from '../public/image-header-mobile.jpg';

export default function Home() {
	const Container = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100vw;
	`;

	const Card = styled.div`
		background: hsl(244, 38%, 16%);
		border-radius: 10px;
		height: 51rem;
		width: 21rem;
	`;

	const ImageOverlay = styled.div`
		background: hsl(277, 64%, 61%);
		position: absolute;
		height: 15.42rem;
		width: 21rem;
		z-index: 1;
		border-radius: 10px 10px 0 0;
		filter: opacity(0.55) brightness(0.4) saturate(3.1);
	`;

	const StyledImage = styled(Image)`
		border-radius: 10px 10px 0 0;
	`;
	``;

	const TextContainer = styled.div`
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 1rem 1.5rem 0rem 1.5rem;
	`;

	const MainHeading = styled.h1`
		font-family: 'Inter', sans-serif;
		font-weight: 700;
		font-size: 1.8rem;
		text-align: center;
		color: hsl(0, 0%, 100%);
		margin-bottom: 0.8rem;
	`;

	const Span = styled.span`
		font-family: 'Inter', sans-serif;
		font-weight: 700;
		color: hsl(277, 64%, 61%);
	`;

	const MainParagraph = styled.p`
		font-family: 'Lexend Deca', sans-serif;
		font-weight: 400;
		text-align: center;
		line-height: 1.8rem;
		font-size: 15px;
		color: hsla(0, 0%, 100%, 0.75);
		margin-left: 1rem;
		margin-top: 0;
	`;

	const StatHeading = styled.h1`
		font-family: 'Inter', sans-serif;
		font-weight: 700;
		font-size: 1.6rem;
		text-align: center;
		color: hsl(0, 0%, 100%);
		margin-bottom: 0;
		margin-top: 1rem;
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
		<>
			<Container>
				<Card>
					<ImageOverlay />
					<StyledImage src={cardHeader} height={480} />
					<TextContainer>
						<MainHeading>
							Get <Span>insights</Span> that help your business grow.
						</MainHeading>
						<MainParagraph>
							Discover the benefits of data analytics and make better decisions
							regarding revenue, customer experience, and overall efficiency.
						</MainParagraph>
						<StatHeading>10k+</StatHeading>
						<Stat>COMPANIES</Stat>
						<StatHeading>314</StatHeading>
						<Stat>TEMPLATES</Stat>
						<StatHeading>12M+</StatHeading>
						<Stat>QUERIES</Stat>
					</TextContainer>
				</Card>
			</Container>
		</>
	);
}
