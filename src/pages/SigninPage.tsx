import React from 'react';
import { Link } from 'react-router-dom';
import CenterLayout from '../components/CenterLayout';
import Division from '../components/Division';
import InputTitle from '../components/InputTitle';
import OtherFormButton from '../components/OtherFormButton';
import FormButton from '../components/FormButton';
import Input from '../components/Input';

/**
 * 로그인 페이지
 */

const SigninPage = () => {
  return (
    <CenterLayout>
      <InputTitle title="로그인" />
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
      <FormButton data-testid="signin-button" title="Sign in" />
      <Link to="/signup">
        <OtherFormButton title="Sign up" />
      </Link>
    </CenterLayout>
  );
};

export default SigninPage;
