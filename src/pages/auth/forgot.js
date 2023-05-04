import { Form, Formik } from 'formik';
import Link from 'next/link';
import { useState } from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';
import * as Yup from 'yup';
import CircleIconButton from '../../../components/buttons/cIbtn';
import Footer from '../../../components/footer';
import Header from '../../../components/header';
import LoginInput from '../../../components/inputs/loginInput';
import styles from '../../../styles/forgot.module.scss';

export default function forgot() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState('');
  const emailValidation = Yup.object({
    email: Yup.string()
      .required("You'll need this email to log in and resetting your password")
      .email('Enter a valid email address'),
  });
  const forgotHandler = async () => {};
  return (
    <>
      <Header country="" />
      <div className={styles.forgot}>
        <div>
          <div className={styles.forgot__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              Forgot your password? <Link href="/">Login instead</Link>
            </span>
          </div>

          <Formik
            enableReinitialize
            initialValues={{
              email,
            }}
            validationSchema={emailValidation}
            onSubmit={() => {
              forgotHandler();
            }}
          >
            {(form) => (
              <Form>
                <LoginInput
                  type="text"
                  name="email"
                  icon="email"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <CircleIconButton type="submit" text="Sign in" />
                {error && <span className={styles.error}>{error}</span>}
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <Footer country="" />
    </>
  );
}
