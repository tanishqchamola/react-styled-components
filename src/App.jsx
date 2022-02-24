import Header from "./components/Header";
import Card from "./components/Card";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./components/styled/Global";
import Footer from "./components/Footer";
import { Container } from "./components/styled/Container.styled";
import content from "./content";

const theme = {
	colors: {
		header: "#ebfbff",
		body: "#ffffff",
		footer: "#003333",
	},
	breakpoints: {
		mobile: "768px",
	},
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header />
			<Container>
				{content.map((item, index) => (
					<Card key={index} item={item}></Card>
				))}
			</Container>
			<Footer />
		</ThemeProvider>
	);
}

export default App;
