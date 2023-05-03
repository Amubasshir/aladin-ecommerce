export default function validateEmail(email) {
  const regexSt =
    /^(?=.{1,256})(?=.{1,64}@.{1,255}$)(?=[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,62}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,62}[a-zA-Z0-9])?)*$)[^\s]+$/;
  return regexSt.test(email);
}
