import React, {  useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../../controls/Button/Button';
import {Input} from '../../controls/Input/Input'
import { signup, login, useAuth, logout } from '../../firebase';
import { LOGIN_ROUTE } from '../../constants/actions';


export default function Register(props:any) {
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();
    
    async function handleSignUp(e:any){
        setLoading(true);
        e.preventDefault();
        try {
            // await signup(emailRef.current.value, passwordRef.current.value )
        } catch {
            alert('Account is already register')
        }
        setLoading(false)
    }
    async function handleLogout(e:any){
        setLoading(true);
        e.preventDefault();
        try{
        await logout();
        }catch{
            alert('Logout is not available')
        }
        setLoading(false)
    }
    async function handleLogin(e:any){
        setLoading(true);
        e.preventDefault();
        try {
            // await login(emailRef.current.value, passwordRef.current.value )
        } catch(e) {
            alert('Invalid data')
        }
        setLoading(false)
    }
    return (
        <div className='wrap'>
            <div className="wrapblock">
                <h1>Registration</h1>
                {/* <p>{currentUser?.email}</p> */}
                <form>
                    <Input ref={emailRef} className="input" text='login' name='text' />
                    <Input ref={passwordRef} className="input" text='password' name='password'/>
                    <Link to={LOGIN_ROUTE} >Login</Link>
                    <div>
                    <Button disabled={loading} currentUser={currentUser} handle={handleSignUp} text="Registration" />
                    
                    </div>
                </form>
            </div>
        </div>
    )
}
