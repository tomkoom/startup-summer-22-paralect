import React from "react";
import css from "./Blank.module.css";

const Blank = ({ text, icon }) => {
	return (
		<div className={css.initial}>
			<span className={css.icon}>{icon}</span>
			<p className={css.text}>{text}</p>
		</div>
	);
};

export default Blank;
