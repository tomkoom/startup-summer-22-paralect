import { useState, useEffect } from "react";
import "./App.css";
import "./Styles/root.css";
import "./Styles/typography.css";
import { Octokit } from "octokit";

import { iSearch, iUser } from "./Icons/Icons";

// components
import { Header } from "./Components";
import { Blank, Profile } from "./Pages";

const GITHUB_PERSONAL_ACCESS_TOKEN = process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN;
const octokit = new Octokit({
	auth: GITHUB_PERSONAL_ACCESS_TOKEN,
});

const App = () => {
	const [loading, setLoading] = useState(false);
	const [userData, setUserData] = useState();
	const [userRepos, setUserRepos] = useState();

	const getUserData = async (searchQuery) => {
		if (searchQuery !== "") {
			setLoading(true);

			// fetch user info
			const user = await octokit.request("GET /users/{username}", {
				username: searchQuery,
			});
			setUserData(user.data);

			// fetch repos
			const repos = await octokit.request("GET /users/{username}/repos", {
				username: searchQuery,
			});
			setUserRepos(repos.data);

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
						repos={userRepos}
					/>
				)}
			</div>
		</div>
	);
};

export default App;
