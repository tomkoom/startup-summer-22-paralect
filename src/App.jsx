import { useState } from "react";
import "./App.css";
import "./Styles/root.css";
import "./Styles/typography.css";

import { iSearch, iUser } from "./Icons/Icons";

// components
import { Header } from "./Components";
import { Blank, Profile } from "./Pages";

function App() {
	const [loading, setLoading] = useState(false);
	const [userData, setUserData] = useState();

	const getUserData = (searchQuery) => {
		if (searchQuery !== "") {
			setLoading(true);
			const url = "https://api.github.com/users/";
			fetch(url + searchQuery)
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					setUserData(data);
				});
			setLoading(false);
		}
	};

	return (
		<div className="app">
			<Header getUserData={getUserData} />
			<div className="content">
				{/* initial */}
				{!userData && <Blank text="Start with searching a GitHub user" icon={iSearch} />}
				{/* not found */}
				{userData && userData.message === "Not Found" && <Blank text="User not found" icon={iUser} />}
				{/* profile */}
				{userData && (
					<Profile
						avatarURL={userData.avatar_url}
						name={userData.name}
						username={userData.login}
						htmlURL={userData.html_url}
						followers={userData.followers}
						following={userData.following}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
