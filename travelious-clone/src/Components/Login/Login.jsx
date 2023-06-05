
import React, { useState } from 'react';
// import './Login.css';
// import './Login.css'
// import  from './Login.css';
// import './Login.css'
// import './Login.css'
import styles from './styles.css';
import { useNavigate } from 'react-router-dom';
// import { productReducer } from '../../Redux/reducer';


// var button1= {
//   width: '100%',
//   padding: '10px',
//   backgroundColor: ' #ef7d2a',
//   color: 'black',
//   border: 'none',
//   borderradius: '5px',
//   cursor: 'pointer',
//   hover: {backgroundColor: '#45a049'}
  
// }



const LoginSignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [captcha, setCaptcha] = useState('');

   const nav= useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleCaptchaChange = (e) => {
    setCaptcha(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    //  login/signup logic here
    if (isLogin) {
      // Login
      console.log('Logged in successfully!');
      alert("Logged in successfully!")
       nav("/");
    } else {
      // Signup
      alert("Signed up successfully!")
      console.log('Signed up successfully!');
      
    }

    
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setMobileNumber('');
    setCaptcha('');
  };

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
    // nav("/");
  };
  

  return (
    <div className="container1">
         <div className="background-image"></div>
      <div className="form-container1">
        <h1 style={{   textalign: 'center',
    marginbottom: '30px', fontWeight:'bold'}}>Travelious</h1>
        <form onSubmit={handleFormSubmit}>
          {!isLogin && (
            <div>
              <input className='input1'
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Name"
                required
              />
              <input className='input1'
                type="text"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
                placeholder="Mobile Number"
                required
              />
            </div>
          )}
          <input className='input1'
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
            required
          />
          <input className='input1'
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            required
          />
          {!isLogin && (
            <input className='input1'
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="Confirm Password"
              required
            />
          )}
          {!isLogin && (
            <div>
              <input className='input1'
                type="text"
                value={captcha}
                onChange={handleCaptchaChange}
                placeholder="Captcha"
                required
              />
              
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5E_d7YpESy5_6wTImh_bnrbiM22zl3kaZw&usqp=CAU" style={{height:"50px" }} />
            </div>
          )}
          <button type="submit"className='button1'>{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p>
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <button onClick={handleToggleForm} className='button1'>
            {isLogin ? 'Sign Up' : 'Login'}
          
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignupPage;
