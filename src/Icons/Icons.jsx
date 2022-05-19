import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSearch,
	faUser,
	faUserFriends,
	faAngleLeft,
	faAngleRight,
	faTimesSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// solid
const iSearch = <FontAwesomeIcon icon={faSearch} />;
const iUser = <FontAwesomeIcon icon={faUser} />;
const iUserFriends = <FontAwesomeIcon icon={faUserFriends} />;
const iAngleLeft = <FontAwesomeIcon icon={faAngleLeft} />;
const iAngleRight = <FontAwesomeIcon icon={faAngleRight} />;
const iTimesSquare = <FontAwesomeIcon icon={faTimesSquare} />;
const iTimesCircle = <FontAwesomeIcon icon={faTimesCircle} />;

// brands
const iGithub = <FontAwesomeIcon icon={faGithub} />;

export {
	// solid
	iSearch,
	iUser,
	iUserFriends,
	iAngleLeft,
	iAngleRight,
	iTimesSquare,
	iTimesCircle,
	// brands
	iGithub,
};
