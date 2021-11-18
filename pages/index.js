import styled from 'styled-components';

export default function Home() {
	const Container = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100vw;
	`;

	return (
		<>
			<Container>
				<h1 style={{ color: 'hsl(0, 0%, 100%)', fontFamily: 'Inter' }}>
					hello world
				</h1>
			</Container>
		</>
	);
}
