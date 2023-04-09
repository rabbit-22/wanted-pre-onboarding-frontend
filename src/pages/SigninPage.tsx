import React from 'react';
import { Link } from 'react-router-dom';
import CenterLayout from '../components/CenterLayout';
import Division from '../components/Division';
import InputTitle from '../components/InputTitle';
import OtherFormButton from '../components/OtherFormButton';
import SigninForm from '../components/signin/SigninForm';

/**
 * 로그인 페이지
 */

const SigninPage = () => {
  return (
    <CenterLayout>
      <InputTitle title="로그인" />
      <Division />
      <SigninForm />
      <Link to="/signup">
        <OtherFormButton title="Sign up" />
      </Link>
    </CenterLayout>
  );
};

export default SigninPage;
