import React, { useState } from 'react';

const FormTable = () => {
    const [input, setInput] = useState({ id:'',firstname: '', lastname: '', email: '', phnumber: '' });
    const [tableData, setTable] = useState([]);

    const handleInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })

    }

    const HandleData = (e) => {
        e.preventDefault();
        setTable([...tableData, input]);
        setInput({ id:'',firstname: '', lastname: '', email: '', phnumber: '' })
    }

    const DeleteData=(index)=>{
        const newData=tableData.filter((value,id)=>id!==index)
        setTable(newData);
    }

    const editData=(index)=>{
      
        setInput(tableData[index]);
      
    }


    return (
        <div>
            <div>
                <h1>Form Table</h1>
                <form onSubmit={HandleData}>
                    <label>id: <input type='number' name='id' value={input.id} onChange={handleInput} required /></label><br />
                    <label>FirstName: <input type='text' name='firstname' value={input.firstname} onChange={handleInput} required /></label><br />
                    <label>LastName: <input type='text' name='lastname' value={input.lastname} onChange={handleInput} required /></label><br />
                    <label>Email: <input type='email' name='email' value={input.email} onChange={handleInput} required /></label><br />
                    <label>phnumber: <input type='number' name='phnumber' value={input.phnumber} onChange={handleInput} required /></label><br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <div>
                {tableData.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Firstname</th>
                                <th>LastName</th>
                                <th>mail</th>
                                <th>phnumber</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.firstname} </td>
                                    <td>{item.lastname} </td>
                                    <td>{item.email} </td>
                                    <td>{item.phnumber} </td>
                                    <td><button onClick={()=>DeleteData(index)}>Delete</button></td>
                                    <td><button onClick={()=>editData(index)}>Edit</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <h3>data Loading....</h3>
                )}
            </div>
        </div>
    )
}

export default FormTable;