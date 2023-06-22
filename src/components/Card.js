import React from 'react';


const Card = ({name, id}) => {
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw1 ba b--silver shadow-5 '>
           <div>
                <img alt='photo' src={`https://robohash.org/${id}`}/>
                <h2>{id}</h2>
                <p>{name}</p>
           </div>
        </div> 
    ); 

} 

export default Card; 
        
            