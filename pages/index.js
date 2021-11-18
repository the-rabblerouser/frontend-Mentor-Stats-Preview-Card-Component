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
		height: 42rem;
		width: 21rem;
	`;

	const ImageOverlay = styled.div`
		background: hsl(277, 64%, 61%);
		position: absolute;
		height: 15.45rem;
		width: 21rem;
		z-index: 1;
		border-radius: 10px 10px 0 0;
		filter: opacity(0.55) brightness(0.4) saturate(3.1);
	`;

	const StyledImage = styled(Image)`
		border-radius: 10px 10px 0 0;
	`;

	return (
		<>
			<Container>
				<Card>
					<ImageOverlay />
					<StyledImage src={cardHeader} height={480} />
				</Card>
			</Container>
		</>
	);
}
