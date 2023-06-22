import React from 'react';
import Card from './Card';
 
const CardArray = ({robots}) => {
  return (
      <div>
        {
          robots.map((robot,i) => {
          return (<Card key={i} name={robots[i].name} id={robots[i].id}/>);
          })
        }
      </div>
  );
}

export default CardArray; 