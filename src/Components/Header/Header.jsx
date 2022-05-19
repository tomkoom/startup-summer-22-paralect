import React from "react";
import css from "./Header.module.css";

// icons
import { iGithub, iSearch } from "../../Icons/Icons";

const Header = ({ handleSearch }) => {
	return (
		<div className={css.header}>
			<div className={css.headerContent}>
				<span className={css.icon}>{iGithub}</span>
				<input
					// onKeyDown={(e) => e.key === "Enter" && getUserData(e.target.value)}
					onKeyDown={handleSearch}
					className={css.input}
					type="text"
					placeholder="Enter GitHub username and press Enter"
				/>
			</div>
		</div>
	);
};

export default Header;
