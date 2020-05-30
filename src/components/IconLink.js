import React from 'react';
import './styles/IconLink.css'
import buttomImg from '../images/add.png'
import { Link } from 'react-router-dom' // se usa link envez de <a></a>
 

const IconLink = () => (
    <Link to="/exercise/new">
        <img src={buttomImg} className="Fitness-Add" alt="exercise"/>
    </Link>
)
 

 

export default IconLink;  


