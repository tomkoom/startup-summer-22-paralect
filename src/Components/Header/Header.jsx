import React from "react";
import css from "./Header.module.css";

// icons
import { iGithub, iSearch } from "../../Icons/Icons";

const Header = ({ setSearch }) => {
	return (
		<div className={css.header}>
			<div className={css.headerContent}>
				<span className={css.icon}>{iGithub}</span>
				<input
					onChange={(e) => setSearch(e.target.value)}
					className={css.search}
					type="text"
					placeholder="Enter GitHub username and press Enter"
				/>
			</div>
		</div>
	);
};

export default Header;
