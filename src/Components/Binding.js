import React,{useState} from 'react';

const Binding=()=>{
    // let city='Bangalore';
  
    const[city,setCity] = useState('bangalore');
    const[emp,setEmp] = useState({name:'sai',id:2})


    const handleCity=()=>{
        setCity('Hyderabad');
        console.log(city);
        setEmp({name:'sree',id:5})
    }

    
    return(
        <div>
            <h1>Binding</h1>
            <h3>City:{city}</h3>
            <button onClick={handleCity}>changeCity</button>
            <h3>Name:{emp.name}</h3>
            <h3>id:{emp.id}</h3>
        </div>
    )
}
export default Binding;