import React from 'react'
import "../stytles/card.scss"

const CardComponent = ({item}) => {

  return (
    <>
   
          <div className="card-container">
            <img src={item.image} alt="" />
            <p>{item.category}</p>
            <h5>{item.name}</h5>
            <p>{item.title}</p>
            <h2>{item.price}</h2>
          </div>
   
         
      
    </>
  )
}

export default CardComponent
