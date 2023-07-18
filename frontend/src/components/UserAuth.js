// import React, { useState } from 'react';
// import { signInUser } from '../services/api';

// const UserAuth = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignIn = async () => {
//     try {
//       const user = await signInUser(email, password);
//       console.log('User signed in successfully:', user);
//     } catch (error) {
//       console.log('Error signing in:', error);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       <button onClick={handleSignIn}>Sign In</button>
//     </div>
//   );
// };

// export default UserAuth;

