import React from 'react';

const Button2 = (props) => {
   console.log(props.getvalues);
    console.log(props);
    return (
        <div className='text-center my-5'>
           <button onClick={props.getvalues} className='bg-lime-300 p-5'>See More</button>
</div>
    );
};

export default Button2;