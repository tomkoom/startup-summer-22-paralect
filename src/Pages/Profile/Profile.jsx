import React from "react";
import css from "./Profile.module.css";

// icons
import { iUserFriends, iUser } from "../../Icons/Icons";

const Profile = ({ avatarURL, name, username, htmlURL, followers, following, repos }) => {
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
			{repos ? (
				<div className={css.repos}>
					<h1>Repositories &#40;{repos && repos.length}&#41;</h1>
					<ul className={css.reposLi}>
						{repos.map((repo) => (
							<li className={css.reposLiI} key={repo.id}>
								<a href={repo.html_url} target="_blank" rel="norefferer noopener">
									<h3>{repo.name}</h3>
								</a>
								<p className={css.repoDescription}>{repo.description}</p>
							</li>
						))}
					</ul>
				</div>
			) : (
				"Undefined"
			)}
		</div>
	);
};

export default Profile;
