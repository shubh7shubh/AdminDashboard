// import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';


// const Login = () => {
//     const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const loginEmail = localStorage.getItem('loginEmail');
//     const loginPassword = localStorage.getItem('loginPassword');

//     if (email === loginEmail && password === loginPassword) {
//       navigate("/")
//     } else {
//       alert('Wrong Credentials');
//     }
//   };

//   useEffect(() => {
//     const randomEmail = "garudaexams.3016@gmail.com"
//     const randomPassword ="Garuda123"
//     localStorage.setItem("loginEmail", randomEmail);
//     localStorage.setItem("loginPassword", randomPassword);
//   }, []);



//   return (
//     <div className="login-container">
//       {/* <h2 className="login-title">Login</h2> */}
//       <form onSubmit={handleSubmit} className="login-form">
//         <div className="login-form-group">
//           <label htmlFor="email" className="login-form-label">
//             Email:
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//             className="login-form-input"
//           />
//         </div>
//         <div className="login-form-group">
//           <label htmlFor="password" className="login-form-label">
//             Password:
//           </label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={handlePasswordChange}
//             required
//             className="login-form-input"
//           />
//         </div>
//         <button type="submit" className="login-form-button">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
