import React from "react";
import css from "./Initial.module.css";

import { iSearch } from "../../Icons/Icons";

const Initial = () => {
	return (
		<div className={css.initial}>
			<span className={css.icon}>{iSearch}</span>
			<span className={css.text}>Start with searching</span>
			<span className={css.text}>a GitHub user</span>
		</div>
	);
};

export default Initial;
