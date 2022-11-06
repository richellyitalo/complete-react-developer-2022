import { useState } from 'react';
import {
  createAuthUserWithEmailPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!displayName || !email || !password || !confirmPassword) return;

    if (password !== confirmPassword) {
      alert("Password confirm doesn't match.");
      return;
    }

    if (password.length < 6) {
      alert('Provide at lest 6 characters.');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailPassword(email, password);
      const response = await createUserDocumentFromAuth(user, { displayName });
      console.log(response);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, this e-mail already in use.');
      } else {
        console.error('Error on create user', error.message);
      }
    }
  };

  return (
    <div>
      <h1>Sign Up Form</h1>

      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="displayName">Display Name</label>
          <input
            type="text"
            required
            onChange={handleChange}
            name="displayName"
            value={displayName}
          />
        </p>

        <p>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />
        </p>

        <p>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
        </p>

        <p>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
          />
        </p>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
