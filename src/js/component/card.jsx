import React from "react";
import PropTypes from "prop-types";
const Card = (props) => {
    return(
<div className="container"> 
        <div class="card justify-content-between d-flex" >
        <img src={props.url} class="card-img-top" alt="casita en el aire"/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>   
    )
}
Card.propType={
  url:PropTypes.string
}
export default Card;