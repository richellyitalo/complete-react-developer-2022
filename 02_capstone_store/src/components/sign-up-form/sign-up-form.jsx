import { useState } from 'react';

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

  const handleSubmit = () => {
    console.log('pofisdjpfojds');
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
