import React, { useRef } from 'react';
import css from './FooterForm.module.css';
import UserDataForm from 'reusableComponents/UserDataForm/UserDataForm';
import * as yup from 'yup';
import HelperText from 'reusableComponents/FormInput/HelperText';
import { useFormik } from 'formik';
import FormInput from 'reusableComponents/FormInput/FormInput';
import switchImages from 'services/switchImages';
import { postSubscribeList } from 'services/api/recipesAPI';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectAuthUserEmail } from 'redux/auth/authSelectors';

const FooterForm = () => {
  const myEmailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  const footerInput = useRef(null);
  const userEmail = useSelector(selectAuthUserEmail);

  let registrationSchema = yup.object().shape({
    email: yup
      .string()
      .min(5, 'Your email is too short')
      .matches(myEmailRegex, {
        message: 'Your email is not valid',
        name: 'email',
        excludeEmptyString: true,
      }),
  });
  const formik = useFormik({
    initialValues: {
      email: userEmail || '',
    },
    validationSchema: registrationSchema,

    onSubmit: values => {
      postSubscribeList({ email: values.email })
        .then(response => {
          if (!response) throw new Error();
          toast.success('You have successfully subscribed!');
          toast.info(
            'if you want cancel you subscribing, please, check your email verification.',
            { autoClose: 7000 },
          );
        })
        .catch(error => {
          if (error.response && error.response.status === 400) {
            toast.error('There was an error subscribing. Please try again.');
          } else {
            toast.error('You are already subscribed!');
          }
        });
    },
  });
  const isValid = registrationSchema.isValidSync(formik.values);
  return (
    <div className={css.footerForm}>
      <UserDataForm
        initialValues={formik.initialValues}
        schema={registrationSchema}
        buttonLabel="Subscribe"
        formik={formik}
        isValid={isValid}
        yourClassName={css.footerFormFlex}
        divButtonClass={css.divButtonClass}
      >
        <div className={css.formFromat}>
          <div className={css.formIinputFormat}>
            <FormInput
              formInputFooterForm={css.formInputFooterForm}
              autocomplete="email"
              formInputArea={css.formInputArea}
              switchImages={switchImages}
              placeholder="Enter your email"
              id="standard-required-register-email"
              type="email"
              name="email"
              ref={footerInput}
              formik={formik}
              erorr={formik.errors.email}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && formik.errors.email}
            />
            {formik.touched.email && formik.errors.email && (
              <HelperText
                value={formik.values.email}
                errorText={formik.errors.email}
              />
            )}
          </div>
        </div>
      </UserDataForm>
    </div>
  );
};

export default FooterForm;
