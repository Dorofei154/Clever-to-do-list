import React,{  useRef, useState }  from 'react';
// import './Login.styles.ts'
import {Link, useHistory } from 'react-router-dom';
import { REGISTER_ROUTE, TODO_ROUTE } from '../../constants/actions';
import Button from '../../controls/Button/Button';
import {Input} from '../../controls/Input/Input'
import { login, useAuth, logout } from '../../firebase';
import { Props } from './Login.interfaces';

export const Login: React.FC<Props> = ({}) => {
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();
    const emailRef = useRef<HTMLInputElement | null>();
    const passwordRef = useRef<HTMLInputElement | null>();
    const history = useHistory();
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
        console.log(typeof e)
        setLoading(true);
        e.preventDefault();
        try {
            // await login(emailRef.current.value, passwordRef.current.value );
            history.push(TODO_ROUTE)
        } catch(e) {
            alert('Invalid data')
        }
        setLoading(false)
    }
    return (
        <div>
            <div className='wrap'>
            <div className="wrapblock">
                <h1>Registration</h1>
                {/* <p>{currentUser?.email}</p> */}
                <form>
                    <Input ref={emailRef} className="input" text='login' name='text' />
                    <Input ref={passwordRef} className="input" text='password' name='password'/>
                    <Link to={REGISTER_ROUTE} >Registration</Link>  
                    <div>
                      <Button disabled={loading} currentUser={currentUser} handle={handleLogin} text="Login" />
                      <Button disabled={loading} currentUser={!currentUser} handle={handleLogout} text="Logout" />
                    </div>
                </form>
            </div>
        </div>
              
        </div>
    )
}
