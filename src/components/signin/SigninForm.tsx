import React from 'react';
import Input from '../Input';
import FormButton from '../FormButton';
import useForm from '../../hooks/useForm';
import validate from '../../hooks/validate';
import ValidateBox from '../ValidateBox';
import { useNavigate } from 'react-router-dom';
/**
 * 로그인 폼
 */

const SigninForm = () => {
  const navigate = useNavigate();
  const { errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: { email: '', password: '' },
    onSubmit: () => {
      navigate('/todo');
    },
    validate: validate,
  });
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
        data-testid="signin-button"
        title="Sign in"
        disabled={isLoading}
      />
    </form>
  );
};

export default SigninForm;
