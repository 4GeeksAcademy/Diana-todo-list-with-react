import React from "react";
import Input from "./input.jsx"


const Home = () => {
	return (
		<div className="general__container">
			<h1 className="text-center mt-5">To-do List</h1>
			<div className="d-flex justify-content-center">
				<div className="inputs__container">
					<Input/>
				</div>
			</div>
			
		</div>
	);
};

export default Home;
