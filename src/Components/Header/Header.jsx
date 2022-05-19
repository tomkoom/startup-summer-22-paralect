import React from "react";
import css from "./Header.module.css";

// icons
import { iGithub, iSearch } from "../../Icons/Icons";

const Header = ({ handleSearch }) => {
	return (
		<div className={css.header}>
			<div className={css.headerContent}>
				<span className={css.logo}>{iGithub}</span>
				<div className={css.inputContainer}>
					<span className={css.searchIcon}>{iSearch}</span>
					<input
						onKeyDown={handleSearch}
						className={css.input}
						type="text"
						placeholder="Enter GitHub username and press Enter"
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
