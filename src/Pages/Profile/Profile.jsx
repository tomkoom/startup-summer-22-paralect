import React from "react";
import css from "./Profile.module.css";
import { iUserFriends, iUser } from "../../Icons/Icons";

const Profile = ({ avatarURL, name, username, htmlURL, followers, following }) => {
	return (
		<div className={css.profile}>
			<div className={css.profileInfo}>
				{/* main info */}
				<div className={css.mainInfo}>
					{avatarURL && <img className={css.avatar} src={avatarURL} alt={`${username} avatar`} />}
					{name && <h2>{name}</h2>}
					{username && (
						<a className={css.username} href={htmlURL} target="_blank" rel="noreferrer noopener">
							{username}
						</a>
					)}
				</div>

				{/* secondary info */}
				<ul className={css.secondaryInfo}>
					<li>
						<span className={css.icon}>{iUserFriends}</span> {followers} followers
					</li>
					<li>
						<span className={css.icon}>{iUser}</span> {following} following
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Profile;
