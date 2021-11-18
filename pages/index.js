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
		border-radius: 10px;
		height: 42rem;
		width: 21rem;
	`;

	return (
		<>
			<Container>
				<Card>
					<h1 style={{ color: 'hsl(0, 0%, 100%)', fontFamily: 'Inter' }}>
						hello world
					</h1>
				</Card>
			</Container>
		</>
	);
}
