import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const onLogWithGoogle = async () => {
    const { user }= await signInWithGooglePopup();
    const response = await createUserDocumentFromAuth(user);

    console.log(response);
  };

  return (
    <div>
      <h3>SignIn</h3>
      <button onClick={onLogWithGoogle}>Sign In with Google</button>
    </div>
  );
};

export default SignIn;
