import React from "react";
import Loader from "react-js-loader";
// https://www.npmjs.com/package/react-js-loader

const LoaderComponent = () => {
	return (
		<div>
			<Loader type="spinner-default" bgColor={"black"} size={32} />
		</div>
	);
};

export default LoaderComponent;
