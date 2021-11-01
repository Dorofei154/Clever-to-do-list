import React,{  useRef, useState }  from 'react';
// import './Login.styles.ts'
import {Link, useHistory } from 'react-router-dom';
import { REGISTER_ROUTE, TODO_ROUTE } from '../../constants/constants';
import {Button} from '../../controls/Button/Button';
import {Input} from '../../controls/Input/Input'
import { login, useAuth, logout, addTodo } from '../../firebase';
import { Props } from './Login.interfaces';



export const Login: React.FC<Props> = ({}) => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();
    const history = useHistory();


    const changeInput = (e:any) => {
        console.log(e)
        e.target.name === 'email' ? 
        setEmail(e.target.value) :
        setPassword(e.target.value)
    }

    const handleLogout = async (e:any) => {
        setLoading(true);
        e.preventDefault();
        try{
          await logout();
          
        }catch{
            alert('Logout is not available')
        }
        setLoading(false)
    }
    const handleLogin = async (e:any) => {
        setLoading(true);
        e.preventDefault();
        try {           
        await login(email, password );
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
                <h1>Login</h1>
                <p>{ currentUser ? currentUser['email'] : null}</p>
                <form>
                <Input  value={email} changeInput={changeInput} className="input" text='login' name='email' />
                    <Input  value={password} changeInput={changeInput} className="input" text='password' name='password' />
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
