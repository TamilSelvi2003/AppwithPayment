import React, { useState } from "react";
import { 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
} from "firebase/auth";
import { auth } from "../Firebase"; 
import './SigInForm.css';
import { FaGoogle } from 'react-icons/fa'; 
import { useNavigate } from "react-router-dom";

const ADMIN_EMAIL = "admin@gmail.com"; 

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSignInForm, setShowSignInForm] = useState(true); 

  const navigate = useNavigate();

  const handleSignInEmailPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user.email === ADMIN_EMAIL) { 
        alert("Admin sign-in successful!");
        navigate("/admin"); 
      } else {
        alert("Sign-in successful!");
        navigate("/"); 
      }
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };
  

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user.email === ADMIN_EMAIL) {
        alert("Welcome, Admin!");
        navigate("/admin");
      } else {
        alert("Google sign-in successful!");
        navigate("/");
      }
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };
  const handleClose = () => {
    setShowSignInForm(false);
    navigate("/"); 
  };

  if (!showSignInForm) {
    return null; 
  }
  return (
    <div className="header">
      <h2 className="Sign">Sign In</h2>
      <button className="close-btn" onClick={handleClose}>X</button>
      <form onSubmit={handleSignInEmailPassword}>
        <div>
          <input
            type="email"
            value={email}
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="btn-form" type="submit" disabled={loading}>
          {loading ? "Signing In..." : "Sign In"}
        </button>
        <button className="google-signin-btn" onClick={handleGoogleSignIn} disabled={loading}>
          {loading ? (
            <span>Signing In...</span>
          ) : (
            <>
              <FaGoogle className="google-icon" /> Sign In with Google
            </>
          )}
        </button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default SignIn;
