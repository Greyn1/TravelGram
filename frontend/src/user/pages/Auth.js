import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import Button from '../../shared/components/FormElements/Button';
import { AuthContext } from '../../shared/context/AuthContext';
import Input from '../../shared/components/FormElements/Input';
import Card from '../../shared/components/UIElements/Card';
import {useForm} from '../../shared/hooks/form-hook';
import { useContext, useState } from 'react';
import './Auth.css';

const Auth = () => {
    const {login} = useContext(AuthContext);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    }, false); 

    const switchModeHandler = () => {
        if (!isLoginMode) {
            setFormData({
                ...formState.inputs,
                name: undefined
            },
                formState.inputs.email.isValid && formState.inputs.password.isValid
            );
        } else {
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
            }, false)
        }
        setIsLoginMode(prevMode => !prevMode);
    }

    const authSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs);
        login();
    }

  return (
    <Card className="authentication">
        <h2>Login Required</h2>
        <hr />
        <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
            <Input 
                id="name"
                element="input"
                type="text"
                label="Your Name"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a Name"
                onInput={inputHandler}
            />
        )}
            <Input 
                id="email"
                element="input"
                type="email"
                label="E-Mail"
                validators={[VALIDATOR_EMAIL()]}
                errorText="Please enter a valid Email"
                onInput={inputHandler}
            />
            <Input 
                id="password"
                element="input"
                type="password"
                label="Password"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid password, atleast 5 characters"
                onInput={inputHandler}
            />
              <Button type="submit" disabled={!formState.isValid}>
                  {isLoginMode ? 'LOGIN' : 'SIGNUP'}
              </Button>
        </form>
          <Button inverse onClick={switchModeHandler}>
              SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
          </Button>
    </Card>
  );
}

export default Auth;