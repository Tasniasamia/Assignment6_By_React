import React from 'react';
import './Card.css'
const Card = (props) => {
    console.log(props)
  
    return (
      
            <div className="card h-100 bg-base-100 shadow-xl">
  <figure><img src={props.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Features</h2>
    {
        (props.features).map(index=><li className='list-decimal'>{index}</li>)
    }
    <hr className='my-3 '/>
    <div className="flex justify-between items-center">
  <div>
    <p>{props.name}</p>
  <i class="fa-regular fa-calendar"></i>
    <span> {props.published_in}</span>
  </div>
  <div>
  <label onClick={()=>props.functionlabel(props.id)} htmlFor="my-modal-5" className="btn"><i class="fa-solid fa-right-long"></i></label>

   
  </div>
    </div>
  </div>
</div>
            
       
    );
};

export default Card;