import React from 'react';
import { Link } from 'react-router-dom';
import CenterLayout from '../components/CenterLayout';
import Division from '../components/Division';
import InputTitle from '../components/InputTitle';
import OtherFormButton from '../components/OtherFormButton';
import SignupForm from '../components/signup/SignupForm';

/**
 * 회원가입 페이지
 */

const SignupPage = () => {
  return (
    <CenterLayout>
      <InputTitle title="회원가입" />
      <Division />
      <SignupForm />
      <Link to="/signin">
        <OtherFormButton title="Sign in" />
      </Link>
    </CenterLayout>
  );
};

export default SignupPage;
