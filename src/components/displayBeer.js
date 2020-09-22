import React from 'react';
import Likes from './likes'


function DisplayBeer(props) {
  return (
      <ul>
        {props.beers.map((item, index)=>{
          return <li key={index}>
            {props.beers[index][0]}
            <p>
              {props.beers[index][1]}
            </p>
            <p>
              {props.beers[index][2]}
            </p>

            <img src={props.beers[index][3]} alt="secret"/>
            
            <Likes/>
      
          </li>
        })}
      </ul>
  )
}


export default DisplayBeer;





















