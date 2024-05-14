import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

const CreateUserPage: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [error, setError] = useState('');
  
  const { createUser } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await createUser({ firstName, lastName, email, password, dob });
    if ('error' in result) {
      setError(result.error);
    } else {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setDob('');
      setError('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Date of Birth</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>
      {error && <div>{error}</div>}
      <button type="submit">Create User</button>
    </form>
  );
};

export default CreateUserPage;
