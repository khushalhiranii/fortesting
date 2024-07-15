import React, { useEffect, useState } from 'react';
import { fetchUserData, login } from './api';

const App = () => {
  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const getUserData = async () => {
//       try {
//         const data = await fetchUserData();
//         setUserData(data);
//       } catch (error) {
//         console.error('Failed to fetch user data:', error);
//       }
//     };

//     getUserData();
//   }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
		const data = await login();
    //   const data = await fetchUserData();
    //   setUserData(data);
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {userData ? (
        <div>
          <h1>Welcome, {userData.name}</h1>
          <p>ID: {userData.id}</p>
          <p>Government ID: {userData.govId}</p>
        </div>
      ) : (
        <div>
          <form onSubmit={handleLogin}>
            <div>
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <div>
              <button type="submit" disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
