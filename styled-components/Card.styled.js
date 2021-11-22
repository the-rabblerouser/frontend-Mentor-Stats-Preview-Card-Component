import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
`;

export const Card = styled.div`
	background: hsl(244, 38%, 16%);
	border-radius: 10px;
	height: 51rem;
	width: 21rem;

	@media (min-width: 500px) {
		display: flex;
		flex-direction: row-reverse;
		background: hsl(244, 38%, 16%);
		border-radius: 8px;
		height: 30rem;
		width: 65rem;
	}
`;

// Image Components

export const ImageContainer = styled.div`
	@media (min-width: 500px) {
		display: flex;
		border-radius: 0px 10px 10px 0px;
		width: 33rem;
		height: 30rem;
	}
`;

export const StyledImage = styled(Image)`
	position: relative;
	border-radius: 10px 10px 0 0;

	@media (min-width: 500px) {
		border-radius: 0px 10px 10px 0px;
		height: 30rem;
	}
`;

export const ImageOverlay = styled.div`
	background: hsl(277, 64%, 61%);
	position: absolute;
	height: 15.42rem;
	width: 21rem;
	z-index: 1;
	border-radius: 10px 10px 0 0;
	filter: opacity(0.55) brightness(0.4) saturate(3.1);

	@media (min-width: 500px) {
		background: hsl(277, 64%, 61%);
		position: absolute;
		height: 30rem;
		width: 32.4rem;
		z-index: 1;
		border-radius: 0px 10px 10px 0px;
		filter: opacity(0.55) brightness(0.4) saturate(3.1);
	}
`;

// Text Components

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 1rem 1.5rem 0rem 1.5rem;

	@media (min-width: 500px) {
		display: flex;
		padding: 3rem 5rem 1rem 5rem;
		height: 100%;
		width: 33rem;
	}
`;

export const MainHeading = styled.h1`
	font-family: 'Inter', sans-serif;
	font-weight: 700;
	font-size: 1.8rem;
	text-align: center;
	color: hsl(0, 0%, 100%);
	margin-bottom: 0.8rem;

	@media (min-width: 500px) {
		text-align: left;
		font-size: 2.1rem;
	}
`;

export const Span = styled.span`
	font-family: 'Inter', sans-serif;
	font-weight: 700;
	color: hsl(277, 64%, 61%);
`;

export const MainParagraph = styled.p`
	font-family: 'Lexend Deca', sans-serif;
	font-weight: 400;
	text-align: center;
	line-height: 1.8rem;
	font-size: 15px;
	color: hsla(0, 0%, 100%, 0.75);
	margin-left: 1rem;
	margin-top: 0;

	@media (min-width: 500px) {
		text-align: left;
		margin-left: 0;
		margin-top: 1rem;
		font-size: 14px;
	}
`;

// Stat Component

export const StatContainer = styled.div`
	@media (min-width: 500px) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 4rem;
	}
`;
