import React, { useEffect, useState } from 'react';
import { FormProps } from '../types/user';

const useForm = ({ initialValues, onSubmit, validate }: any) => {
  const [values, setValues] = useState<FormProps>(initialValues);
  const [errors, setErrors] = useState<FormProps>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    if (Object.keys(errors).length === 0) {
      onSubmit(values);
    }
    event.preventDefault();
  };

  useEffect(() => {
    setErrors(validate(values));
  }, [values]);

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
