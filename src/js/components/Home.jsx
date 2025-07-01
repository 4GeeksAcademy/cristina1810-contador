import React from "react";

import SecondsCounter from "./SecondsCounter";


//create your first component
const Home = () => {
	return (
		<div className="m-5">
		<SecondsCounter initialVal={0}/>
		</div>
	);
};

export default Home;

