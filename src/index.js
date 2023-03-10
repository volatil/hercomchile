import React from "react";
import ReactDOM from "react-dom/client";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Inicio from "./pages/Inicio/Inicio";
import Acerca from "./pages/Acerca/Acerca";
import Contacto from "./pages/Contacto/Contacto";
import Error from "./pages/Error/Error";

import Mail from "./pages/Mail/Mail";
// import reportWebVitals from "./reportWebVitals";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Router>
		<Header />
		<Routes>
			<Route exact path="/" element={<Inicio />} />
			<Route path="/acerca" element={<Acerca />} />
			<Route path="/contacto" element={<Contacto />} />
			<Route path="*" element={<Error />} />

			<Route path="/mail" element={<Mail />} />
			{/* <Route path="/resultados/" element={<Resultados />} /> */}

			{/* <Route path="/dev/:categoria" element={<Dev />} /> */}
			{/* <Route path="/cerebro" element={<Cerebro />} /> */}
		</Routes>
		<Footer />
	</Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
