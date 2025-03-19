import React from 'react';
import SubmitBtn from './SubmitButton';


const InputForm = () => {
    return (
        <div>
            <form>

                <h1>Application</h1>
                <label>First Name:</label><input type='text' />
                    <label>Last Name: </label> <input type='text' />
                    <label>Mobile No:</label> <input type='number' /> 
                    <label>Email: </label><input type='email' />
                    <label>Password:</label> <input type='password' />
                    <div><SubmitBtn /></div>


                </form>
                </div>

        )
}
 export default InputForm;