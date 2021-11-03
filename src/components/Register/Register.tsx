import React, {   useState } from 'react'
import {S} from './Register.styles'
import { signup} from '../../firebase';

import { EnterForm } from '../../controls/Form/Form';


const Register = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    
    
    const ChangeInput = (e:{ target: HTMLInputElement; }) => {
        e.target.name === 'email' ? 
        setEmail(e.target.value) :
        setPassword(e.target.value)
    }

    
    const handleRegistration = async (e:React.FormEvent<HTMLInputElement>) =>{ 
        e.preventDefault();
        try {
                await signup(email , password)
        } catch(e) {
            alert('Invalid data')
        }
    }
    return (
        <S.Container>
            
            <EnterForm header='Registration' password={password} ChangeInput={ChangeInput} email={email} handleFunction={handleRegistration} text='Registration' />
                
                    
              
        </S.Container>
    )
}
export {Register}