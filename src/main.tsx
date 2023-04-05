import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<BrowserRouter>
		<ChakraProvider>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</ChakraProvider>
	</BrowserRouter>
);
