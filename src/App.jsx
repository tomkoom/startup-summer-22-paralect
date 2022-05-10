import { useState, useEffect } from "react";
import "./App.css";
import "./Styles/root.css";
import "./Styles/typography.css";
import { Routes, Route } from "react-router-dom";

import { iSearch } from "./Icons/Icons";

// components
import { Header } from "./Components";
import { Blank } from "./Pages";

function App() {
	const [search, setSearch] = useState("");

	useEffect(() => {
		console.log(search);
	}, [search]);

	return (
		<div className="app">
			<Header setSearch={setSearch} />
			<div className="content">
				<Routes>
					<Route path="/" element={<Blank text="Start with searching a GitHub user" icon={iSearch} />} />
					<Route path="/notfound" element={<Blank />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
