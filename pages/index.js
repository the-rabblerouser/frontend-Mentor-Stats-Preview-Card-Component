import Image from 'next/image';

import cardHeader from '../public/image-header-mobile.jpg';

import styled from 'styled-components';

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
		bordert-radius: 10px;
		height: 50rem;
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

	const TextContainer = styled.div`
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		padding: 1rem 1.5rem 1rem 1.5rem;
	`;

	const MainHeading = styled.h1`
		font-family: inter;
		font-weight: 700;
		font-size: 1.8rem;
		text-align: center;
		color: hsl(0, 0%, 100%);
	`;

	const Span = styled.span`
		font-family: inter;
		font-weight: 700;
		color: hsl(277, 64%, 61%);
	`;

	const MainParagraph = styled.p`
		font-family: Lexend Deca;
		font-weight: 300;
		text-align: center;
		line-height: 1.8rem;
		font-size: 15px;
		color: hsla(0, 0%, 100%, 0.75);
		margin: 0 0.8rem 0 0.8rem;
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
					</TextContainer>
				</Card>
			</Container>
		</>
	);
}
