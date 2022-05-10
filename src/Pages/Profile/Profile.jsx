import React from "react";

const Profile = ({ username, avatarURL }) => {
	return (
		<div>
			<img src={avatarURL} alt={`${username} avatar`} />
			<h2>{username}</h2>
		</div>
	);
};

export default Profile;
