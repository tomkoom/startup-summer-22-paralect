import React from "react";

const Profile = ({ username, avatarURL }) => {
	return (
		<div>
			{avatarURL ? <img src={avatarURL} alt={`${username} avatar`} /> : "undefined"}
			{username ? <h2>{username}</h2> : "undefined"}
		</div>
	);
};

export default Profile;
