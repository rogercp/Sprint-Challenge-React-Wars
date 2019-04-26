import React from 'react';
import './Characters.css';

const  Character = props=> {
    return (

           <div className="character-card">
                <h3>{props.character.name}</h3>
                <p>height: {props.character.height}</p>  
                <p>mass: {props.character.mass}</p>   
                <p>hair_color: {props.character.hair_color}</p>  
                <p>skin_color: {props.character.skin_color}</p>  
                <p>eye_color: {props.character.eye_color}</p>  
                <p>birth_year: {props.character.birth_year}</p>  
                <p>gender: {props.character.gender}</p>   
                <p>homeworld: {props.character.homeworld}</p> 
                <p >films: {props.character.films}</p>  
                <p >species: {props.character.species}</p>  
                <p >vehicles: {props.character.vehicles}</p>  
                <p >starships: {props.character.starships}</p>  
                <p>created: {props.character.created}</p> 
                <p>edited: {props.character.edited}</p>  
                <p>url: {props.character.url}</p>  
           </div>

    );
}
export default Character;