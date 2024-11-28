import React, { useState } from 'react';
import { FaGithub, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import '../styles/Auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    school: ''
  });

  return (
    <div className="auth-container">
      <div className="auth-box animate__fadeIn">
        <div className="auth-header">
          <h1>ANONYMOUS KENYA</h1>
          <h2>UDEMY ACCOUNT SERVICES</h2>
        </div>

        {isLogin ? (
          <form className="login-form">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        ) : (
          <form className="signup-form">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="School Name" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
          </form>
        )}

        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        </p>
      </div>

      <footer className="auth-footer">
        <div className="social-icons">
          <a href="https://github.com/anonymous-kenya">
            <FaGithub />
          </a>
          <a href="https://t.me/anonymous-kenya">
            <FaTelegram />
          </a>
          <a href="https://wa.me/yourwhatsapp">
            <FaWhatsapp />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Anonymous Kenya. All Rights Reserved.</p>
      </footer>
    </div>
  );
};
