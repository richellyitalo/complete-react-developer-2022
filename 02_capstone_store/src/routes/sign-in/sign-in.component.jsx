import SignUpForm from '../../components/sign-up-form/sign-up-form';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  // auth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const onLogWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const response = await createUserDocumentFromAuth(user);

    console.log(response);
  };

  return (
    <div>
      <h3>SignIn</h3>
      <button onClick={onLogWithGoogle}>Sign In with Google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
