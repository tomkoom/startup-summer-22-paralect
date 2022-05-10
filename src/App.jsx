import { useState, useEffect } from "react";
import "./App.css";
import "./Styles/root.css";
import "./Styles/typography.css";

import { iSearch, iUser } from "./Icons/Icons";

// components
import { Header } from "./Components";
import { Blank, Profile } from "./Pages";

function App() {
	const [search, setSearch] = useState("");
	const [loading, setLoading] = useState(false);
	const [userData, setUserData] = useState();

	useEffect(() => {
		if (search !== "") {
			setLoading(true);
			const url = "https://api.github.com/users/";
			fetch(url + search)
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					setUserData(data);
				});
			setLoading(false);
		}
	}, [search]);

	return (
		<div className="app">
			<Header setSearch={setSearch} />
			<div className="content">
				{/* initial */}
				{search === "" && <Blank text="Start with searching a GitHub user" icon={iSearch} />}
				{/* not found */}
				{userData && userData.message === "Not Found" && <Blank text="User not found" icon={iUser} />}
				{/* profile */}
				{userData && <Profile username={userData.login} avatarURL={userData.avatar_url} />}
			</div>
		</div>
	);
}

export default App;
