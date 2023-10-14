import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { intrusionDetectionSystem } from "../intrusion.js"

const Login = () => {
  const [err, setErr] = useState(false);
  const [detectIntrusion, setDetectIntrusion] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (intrusionDetectionSystem(email) && intrusionDetectionSystem(password)){
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/")
      } catch (err) {
        setErr(true);
      }
    } else {
      setDetectIntrusion(true);
      window.alert("Potential SQL Injection detected!");
    }


  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">ChatApp</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
          <button>Sign in</button>
          {detectIntrusion && <span>Intrusion detected</span>}
          {err && <span>Something went wrong</span>}
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
