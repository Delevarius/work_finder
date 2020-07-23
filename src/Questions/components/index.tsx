import React, {useState} from 'react';
import Input from '../../lib/components/Input';
import InputArea from '../../lib/components/InputArea';
import { validateEmail } from '../utils';
import '../index.css';

const Questions = () => {
  const [name, changeName] = useState('')
  const [email, changeEmail] = useState('')
  const [isValid, setValidity] = useState(true)
  const [message, changeMessage] = useState('')
  return (
    <div className="questions_wrapper">
        <div className="questions_title">QUESTION ? WE ARE HERE TO HELP !</div>
        <div className="questions_inputs_wrapper">
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
          className="questions_submit_button"
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