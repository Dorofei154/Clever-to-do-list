import React,{   useState }  from 'react';
import './Login.styles.ts'

import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../constants/constants';

import { login, useAuth, } from '../../firebase';
import { EnterForm } from '../../controls/Form/Form';
import { S } from './Login.styles';




 const Login = () => {
    const [password, SetPassword] = useState('')
    const [email, SetEmail] = useState('');
    const history = useHistory();


    const ChangeInput = (e:{ target: HTMLInputElement; }) => {
        
        e.target.type === 'email' ? 
        SetEmail(e.target.value) :
        SetPassword(e.target.value)
    }

    
    const handleLogin = async (e:React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        try {           
            console.log('222',email,'12', password)
        await login(email, password );
        history.push(ROUTES.TODO_ROUTE)
        } catch(e) {
            alert('Invalid data')
        }
     
      }
    return (
        <S.Container>
            
            <EnterForm header='Login' password={password} email={email} ChangeInput={ChangeInput} handleFunction={handleLogin} text='Sign In'/>
            {/* <div className="wrapblock">
                <Header text='Login' />
                <p>{ CurrentUser ? CurrentUser['email'] : null}</p>
                <form>
                    <Input  value={email} changeInput={ChangeInput} className="input" text='login' name='email' />
                    <Input  value={password} changeInput={ChangeInput} className="input" text='password' name='password' />
                    <Link to={ROUTES.REGISTER_ROUTE} >Registration</Link>  
                    <div>
                      <Button disabled={false}  handle={handleFunction} text="Login" />
                      
                    </div>
                </form> */}
               
            {/* </div> */}
      
              
        </S.Container>
    )
}
export {Login}