import axios from 'axios';
import { Form, Formik } from 'formik';
import { getProviders, signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';
import * as Yup from 'yup';
import CircleIconButton from '../../components/buttons/cIbtn';
import Footer from '../../components/footer';
import Header from '../../components/header';
import LoginInput from '../../components/inputs/loginInput';
import styles from '../../styles/signin.module.scss';

const initialValues = {
  login_email: '',
  login_password: '',
  name: '',
  email: '',
  password: '',
  conf_password: '',
  success: '',
  error: '',
};

export default function signin({ providers }) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(initialValues);
  const {
    login_email,
    login_password,
    name,
    email,
    password,
    conf_password,
    success,
    error,
  } = user;
  const handleChangeEmail = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginValidation = Yup.object({
    login_email: Yup.string()
      .required('Email address is required')
      .email('Please enter a valid email address'),
    login_password: Yup.string().required('Please enter a valid password'),
  });
  const registerValidation = Yup.object({
    name: Yup.string()
      .required("What's your name?")
      .min(2, 'First name must be at between 2 and 16 characters')
      .max(16, 'First name must be at between 2 and 16 characters')
      .matches(/^[aA-zZ]/, 'Number and special characters are not allowed'),

    email: Yup.string()
      .required("You'll need this email to log in and resetting your password")
      .email('Enter a valid email address'),

    password: Yup.string()
      .required(
        'Please enter a password that is at least 6 characters long and includes a combination of letters, numbers, and special characters'
      )
      .min(6, 'Password must be at least 6 characters')
      .max(36, 'Password must be at most 36 characters'),

    conf_password: Yup.string()
      .required('Confirm your password')
      .oneOf([Yup.ref('password')], 'Password must be matched'),
  });
  const signUpHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post('/api/auth/signup', {
        name,
        email,
        password,
      });
      setUser({ ...user, error: '', success: data.message });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setUser({ ...user, success: '', error: error.response.data.message });
    }
  };
  return (
    <>
      <Header country="country" />
      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              We'd be happy to join us! <Link href="/">Go Store</Link>
            </span>
          </div>
          <div className={styles.login__form}>
            <h1>Sign in</h1>
            <p>Get access to enjoy the best E-shopping experience.</p>
            <Formik
              enableReinitialize
              initialValues={{
                login_email,
                login_password,
              }}
              validationSchema={loginValidation}
            >
              {(form) => (
                <Form>
                  <LoginInput
                    type="text"
                    name="login_email"
                    icon="email"
                    placeholder="Email address"
                    onChange={handleChangeEmail}
                  />
                  <LoginInput
                    type="password"
                    name="login_password"
                    icon="password"
                    placeholder="Enter your password here"
                    onChange={handleChangeEmail}
                  />
                  <CircleIconButton type="submit" text="Sign in" />
                  <div className={styles.forgot}>
                    <a href="/">Forget password ?</a>
                  </div>
                </Form>
              )}
            </Formik>
            <div className={styles.login__socials}>
              <span className={styles.or}>Or Continue With</span>
              <div className={styles.login__socials_wrap}>
                {providers.map((provider) => (
                  <div key={provider.name}>
                    <button
                      className={styles.social__btn}
                      onClick={() => signIn(provider.id)}
                    >
                      <img src={`../../icons/${provider.name}.svg`} alt="" />
                      Sign in with {provider.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.login__container}>
          <div className={styles.login__form}>
            <h1>Sign up</h1>
            <p>Get access to enjoy the best E-shopping experience.</p>
            <Formik
              enableReinitialize
              initialValues={{
                name,
                email,
                password,
                conf_password,
              }}
              validationSchema={registerValidation}
              onSubmit={() => {
                signUpHandler();
              }}
            >
              {(form) => (
                <Form>
                  <LoginInput
                    type="text"
                    name="name"
                    icon="user"
                    placeholder="Full name"
                    onChange={handleChangeEmail}
                  />
                  <LoginInput
                    type="text"
                    name="email"
                    icon="email"
                    placeholder="Enter your email address"
                    onChange={handleChangeEmail}
                  />
                  <LoginInput
                    type="password"
                    name="password"
                    icon="password"
                    placeholder="Enter your password "
                    onChange={handleChangeEmail}
                  />
                  <LoginInput
                    type="password"
                    name="conf_password"
                    icon="password"
                    placeholder="Please retype your password"
                    onChange={handleChangeEmail}
                  />
                  <CircleIconButton type="submit" text="Sign up" />
                </Form>
              )}
            </Formik>
            <div>{success && <span>{success}</span>}</div>
            <div>{error && <span>{error}</span>}</div>
          </div>
        </div>
      </div>
      <Footer country="Bangladesh" />
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = Object.values(await getProviders());
  return {
    props: { providers },
  };
}
