import React, {useState} from 'react';
import Input from '../../lib/components/Input';
import InputArea from '../../lib/components/InputArea';
import { validateEmail } from '../utils';

const Questions = () => {
  const [name, changeName] = useState('')
  const [email, changeEmail] = useState('')
  const [isValid, setValidity] = useState(true)
  const [message, changeMessage] = useState('')
  return (
    <div className="Questions">
        <div>QUESTION ? WE ARE HERE TO HELP !</div>
        <div>
          <Input
            title="Name"
            value={name}
            callback={(e: any) => {
              const value = e.target.value;
              changeName(value)
            }}
          />
          <Input
            title="Email"
            value={email}
            callback={(e: any) => {
              const value = e.target.value;
              setValidity(validateEmail(value))
              changeEmail(value)
            }}
          />
          {
            !isValid &&
            <div style={{ color: 'red' }}>Not a valid email</div>
          }
          <InputArea
            title="Name"
            value={message}
            callback={(e: any) => {
              const value = e.target.value;
              changeMessage(value)
            }}
          />
        </div>
        <button
          onClick={() =>{
            if(isValid){
              alert('submited')
            }
          }}
        >
          Send
        </button>
    </div>
  );
}

export default Questions;