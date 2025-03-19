import React from 'react';

const UserTable = ()=>{

    const empData =[
        {name:'vasu',id:1,city:'Hyd',pincode:12342},
        {name:'divya',id:2,city:'Bglr',pincode:12342},
        {name:'sai',id:3,city:'pune',pincode:12342},
        {name:'sree',id:4,city:'Hyd',pincode:12342},
        
    ]
    return(
        <div>
            <h1>user Details</h1>
            <table>
                <thead>
                    
                        
                            <tr>
                            <th>Emp Name</th>
                            <th>Emp id</th>
                            <th>Emp city</th>
                            <th>Emp pincode</th>
                            </tr>
                            
                        
                    
                </thead>
                <tbody>
    
                        {empData.map((item,index)=>(
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.id}</td>
                                <td>{item.city}</td>
                                <td>{item.pincode}</td>
                            </tr>
                            
                            
                        ))}
                
                </tbody>
            </table>
        </div>
    )
}
export default UserTable;