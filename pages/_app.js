import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body {
	padding: 0;
	margin: 0;
	background: hsl(233, 47%, 7%);
}

a {
	color: inherit;
	text-decoration: none;
}

* {
	box-sizing: border-box;
}
`;

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
