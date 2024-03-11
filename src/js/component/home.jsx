import React from "react";
import NavBar from "../component/narvar"; 
import Jumbotron from "../component/jumbotron";
import Card from "../component/card";
import PropTypes from "prop-types";



//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<NavBar />
			<Jumbotron />
				<div className Card style={{ display: "flex" }}>
					<Card 
					url={"https://images.pexels.com/photos/20291106/pexels-photo-20291106/free-photo-of-madera-ligero-paisaje-pajaro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
					/>
					<Card 
					url={"https://images.pexels.com/photos/18866500/pexels-photo-18866500/free-photo-of-gente-mujer-relajacion-verano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
					 />
					<Card 
					url={"https://images.pexels.com/photos/20257462/pexels-photo-20257462/free-photo-of-mar-vacaciones-agua-oceano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
					 />
					<Card 
					url={"https://images.pexels.com/photos/20283029/pexels-photo-20283029/free-photo-of-ipe-rosa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
					 />

				</div>



		</div>
	);
};

export default Home;
