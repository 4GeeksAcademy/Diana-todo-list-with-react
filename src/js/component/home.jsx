import React from "react";
import Input from "./input.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";



//create your first component
const Home = () => {
	return (
		<div className="text-center border">
			<h1 className="text-center mt-5">To-do List</h1>
			<div className="d-flex justify-content-center">
				<div className="p-3">
					<Input/>
				</div>
			</div>
			
		</div>
	);
};

export default Home;
