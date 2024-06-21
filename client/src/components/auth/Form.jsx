import { useState } from 'react';
import Button from '../ui/Button';
import Input from './Input';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup, signin } from '../../actions/auth';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Form = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[500px] shadow-md p-5 rounded-[10px] text-center mt-10'
      onSubmit={handleSubmit}
    >
      {isSignup && (
        <div>
          <Input
            type='text'
            name='firstName'
            label='First Name'
            handleChange={handleChange}
          />
          <Input
            type='text'
            name='lastName'
            label='Last Name'
            handleChange={handleChange}
          />
        </div>
      )}
      <Input
        type='email'
        name='email'
        label='Email'
        handleChange={handleChange}
      />
      <Input
        type='password'
        name='password'
        label='Password'
        handleChange={handleChange}
      />
      {isSignup && (
        <Input
          type='password'
          name='confirmPassword'
          label='Confirm Password'
          handleChange={handleChange}
        />
      )}
      {isSignup ? (
        <p className='text-primary mt-3'>
          Already Have an account ?{' '}
          <button
            className='text-secondary'
            onClick={() => setIsSignup(!isSignup)}
          >
            Login
          </button>
        </p>
      ) : (
        <p className='text-primary mt-3'>
          Dont you have an account ?{' '}
          <button
            className='text-secondary'
            onClick={() => setIsSignup(!isSignup)}
          >
            Sign Up
          </button>
        </p>
      )}
      <div className='flex items-center justify-center mt-5'>
        <Button text={isSignup ? 'Sign Up' : 'Sign In'} />
      </div>
    </form>
  );
};

export default Form;
