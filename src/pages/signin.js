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
};

export default function signin({ providers }) {
  console.log(providers);
  const [user, setUser] = useState(initialValues);
  const { login_email, login_password } = user;
  const handleChangeEmail = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  console.log(user);
  const loginValidation = Yup.object({
    login_email: Yup.string()
      .required('Email address is required')
      .email('Please enter a valid email address'),
    login_password: Yup.string().required('Please enter a valid password'),
  });
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
                    placeholder="Email Address"
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
