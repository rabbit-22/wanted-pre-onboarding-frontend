import React, { useEffect, useState } from 'react';
import Input from '../Input';
import FormButton from '../FormButton';
import useForm from '../../hooks/useForm';
import validate from '../../hooks/validate';
import ValidateBox from '../ValidateBox';
import { useNavigate } from 'react-router-dom';

/**
 * 회원가입 폼
 */

const SignupForm = () => {
  const navigate = useNavigate();
  const [isDisable, setIsDisable] = useState(false);
  const { errors, handleChange, handleSubmit } = useForm({
    initialValues: { email: '', password: '' },
    onSubmit: () => {
      navigate('/signin');
    },
    validate: validate,
  });
  useEffect(() => {
    if (errors.email || errors.password) setIsDisable(true);
    else setIsDisable(false);
  }, [errors]);

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{ display: 'flex', position: 'relative', flexDirection: 'column' }}
    >
      <Input
        mb={3.5}
        name="email"
        label="Email Address"
        type="email"
        data-testid="email-input"
        onChange={handleChange}
      />
      {errors.email && <ValidateBox top={60}>{errors.email}</ValidateBox>}
      <Input
        mb={3}
        name="password"
        label="Password"
        type="password"
        data-testid="password-input"
        onChange={handleChange}
      />
      {errors.password && (
        <ValidateBox bottom={60}>{errors.password}</ValidateBox>
      )}
      <FormButton
        data-testid="signup-button"
        title="Sign up"
        disabled={isDisable}
      />
    </form>
  );
};

export default SignupForm;
