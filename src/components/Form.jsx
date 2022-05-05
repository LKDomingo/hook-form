import React, { useState } from 'react';


const Form = (props) => {

    let [firstName, setFirstName] = useState("")
    let [lastName, setLastName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [confirmPassword, setConfirmPassword] = useState("")

    return (

        <form>
            <div className='d-flex bg-light align-items-center justify-content-center p-2 rounded my-3'>
                <label htmlFor="firstName" className="">First Name:</label>
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } className='form-control'/>
            </div>
            <div className='d-flex bg-light align-items-center justify-content-center p-2 rounded my-3'>
                <label htmlFor="lastName" className="">Last Name:</label>
                <input type="text" onChange={ (e) => setLastName(e.target.value) } className='form-control'/>
            </div>
            <div className='d-flex bg-light align-items-center justify-content-center flex-between p-2 rounded my-3'>
                <label htmlFor="email" className="">Email:</label>
                <input type="text" onChange={ (e) => setEmail(e.target.value) } className='form-control'/>
            </div>
            <div className='d-flex bg-light align-items-center justify-content-center p-2 rounded my-3'>
                <label htmlFor="password" className="">Password:</label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } className='form-control'/>
            </div>
            <div className='d-flex bg-light align-items-center justify-content-center p-2 rounded my-3'>
                <label htmlFor="confirmPassword" className="">Confirm Password:</label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } className='form-control'/>
            </div>
            <hr />
            <h4>Your Form Data</h4>
            <p>First Name: { firstName }</p>
            <p>Last Name: { lastName }</p>
            <p>Email: { email }</p>
            <p>Password: { password }</p>
            <p>Confirm Password: { confirmPassword }</p>
        </form>

    )

}
export default Form