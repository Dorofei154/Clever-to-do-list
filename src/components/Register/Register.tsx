import React, {  useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import {Button} from '../../controls/Button/Button';
import {Input} from '../../controls/Input/Input'
import { signup, useAuth, logout } from '../../firebase';
import { LOGIN_ROUTE } from '../../constants/constants';


export default function Register(props:any) {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const currentUser = useAuth();
    
    const changeInput = (e:any) => {
        console.log(e)
        e.target.name === 'email' ? 
        setEmail(e.target.value) :
        setPassword(e.target.value)
    }

    
    const handleRegistration = async (e:any) =>{
        setLoading(true);
        e.preventDefault();
        try {
                await signup(email , password)
        } catch(e) {
            alert('Invalid data')
        }
        setLoading(false)
    }
    return (
        <div className='wrap'>
            <div className="wrapblock">
                <h1>Registration</h1>
                <p>{currentUser?.['email']}</p>
                <form>
                    <Input  value={email} changeInput={changeInput} className="input" text='login' name='email' />
                    <Input  value={password} changeInput={changeInput} className="input" text='password' name='password' />
                    <Link to={LOGIN_ROUTE} >Login</Link>
                    <div>
                    <Button disabled={false} currentUser={currentUser} handle={handleRegistration} text="Registration" />
                    
                    </div>
                </form>
            </div>
        </div>
    )
}
