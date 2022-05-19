import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faUserFriends, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// solid
const iSearch = <FontAwesomeIcon icon={faSearch} />;
const iUser = <FontAwesomeIcon icon={faUser} />;
const iUserFriends = <FontAwesomeIcon icon={faUserFriends} />;
const iAngleLeft = <FontAwesomeIcon icon={faAngleLeft} />;
const iAngleRight = <FontAwesomeIcon icon={faAngleRight} />;

// brands
const iGithub = <FontAwesomeIcon icon={faGithub} />;

export {
	// solid
	iSearch,
	iUser,
	iUserFriends,
	iAngleLeft,
	iAngleRight,
	// brands
	iGithub,
};
