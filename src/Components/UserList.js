import React from 'react';

const ArrayList=()=>{

    const arr =[
        {name:'vasu',id:1,city:'Hyd',pincode:12342},
        {name:'divya',id:2,city:'Bglr',pincode:12342},
        {name:'sai',id:3,city:'pune',pincode:12342},
        {name:'sree',id:4,city:'Hyd',pincode:12342},
        
    ]
    return(
        <div>
            <h1>array Elemets</h1>
           <ul>
            {arr.map((item,index)=>(
                <li key={index}>Name:{item.name} <br/> id:{item.id} <br/>city:{item.city}</li>
                
            ))}
           </ul>
        </div>
    )
}
export default ArrayList;