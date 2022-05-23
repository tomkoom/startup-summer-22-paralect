import React, { useState, useEffect } from "react";
import "./App.css";
import "./Styles/root.css";
import "./Styles/typography.css";
import { Octokit } from "octokit";

// icons
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
	const [searchQuery, setSearchQuery] = useState("");
	const [userData, setUserData] = useState(undefined);
	const [userRepos, setUserRepos] = useState(undefined);
	const [fetchErr, setFetchErr] = useState(undefined);
	const [currentPage, setCurrentPage] = useState(0);
	const perPage = 4;

	const fetchUserData = async () => {
		try {
			const user = await octokit.request("GET /users/{username}", {
				username: searchQuery,
			});
			setFetchErr(undefined);
			setUserData(user.data);
		} catch (err) {
			setFetchErr(err.message);
		}
	};

	const fetchUserRepos = async (currentPage) => {
		const repos = await octokit.request("GET /users/{username}/repos", {
			username: searchQuery,
			page: currentPage,
			per_page: perPage,
		});
		setUserRepos(repos.data);
	};

	const handleSearch = (e) => {
		if (e.key === "Enter") {
			setSearchQuery(e.target.value);
		}
	};

	const handlePageClick = (e) => {
		const currentPage = e.selected;
		fetchUserRepos(currentPage);
		setCurrentPage(currentPage);
	};

	// get user info
	useEffect(() => {
		if (searchQuery !== "") {
			const run = async () => {
				setLoading(true);
				await fetchUserData();
				await fetchUserRepos();
				setLoading(false);
			};
			run();
		} else {
			setFetchErr(undefined);
			setUserData(undefined);
		}
	}, [searchQuery]);

	// set err
	useEffect(() => {
		if (fetchErr) {
			setUserData(undefined);
		}
	}, [fetchErr]);

	// reset page
	useEffect(() => {
		if (userData) {
			setCurrentPage(0);
		}
	}, [userData]);

	return (
		<div className="app">
			<Header handleSearch={handleSearch} />
			<div className="content">
				{/* initial */}
				{!userData && !fetchErr && <Blank text="Start with searching a GitHub user" icon={iSearch} />}

				{/* not found */}
				{fetchErr === "Not Found" && <Blank text="User not found" icon={iUser} />}

				{/* profile */}
				{userData && (
					<Profile
						userData={userData}
						repos={userRepos}
						loading={loading}
						handlePageClick={handlePageClick}
						perPage={perPage}
						currentPage={currentPage}
					/>
				)}
			</div>
		</div>
	);
};

export default App;
