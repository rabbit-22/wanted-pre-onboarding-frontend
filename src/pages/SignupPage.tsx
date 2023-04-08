import React from 'react';
import { Link } from 'react-router-dom';
import CenterLayout from '../components/CenterLayout';
import Division from '../components/Division';
import InputTitle from '../components/InputTitle';
import OtherFormButton from '../components/OtherFormButton';
import FormButton from '../components/FormButton';
import Input from '../components/Input';

/**
 * 회원가입 페이지
 */

const SignupPage = () => {
  return (
    <CenterLayout>
      <InputTitle title="회원가입" />
      <Division />
      <Input
        mb={3}
        name="id"
        label="Email Address"
        type="email"
        data-testid="email-input"
      />
      <Input
        mb={3}
        name="password"
        label="Password"
        type="password"
        data-testid="password-input"
      />
      <Input
        mb={3}
        name="confirmPwd"
        label="Confirm Password "
        type="password"
        data-testid="password-input"
      />
      <FormButton data-testid="signup-button" title="Sign up" />
      <Link to="/signin">
        <OtherFormButton title="Sign in" />
      </Link>
    </CenterLayout>
  );
};

export default SignupPage;
