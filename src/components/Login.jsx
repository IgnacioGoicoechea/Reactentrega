import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../main";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/inicio");
        alert(user.email + " is logged in");
      })
      .catch((error) => {
        const errorCode = setError("Email or password is incorrect");
        const errorMessage = error.message;
      });
  };

  return (
    <>
      <main>
        <section>
          <div className="login-box">
            <h2> Iniciar sesión </h2>

            <form>
              <div className="user-box">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email-address">Email </label>
              </div>

              <div className="user-box">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Contraseña"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password">Contraseña</label>
              </div>
            <button onClick={onLogin}>
                
             <a onClick={onLogin}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Entrar
                        </a>
            </button> 
              {/* <div>
                <button className="submit" onClick={onLogin}>Login</button>
              </div> */}
            </form>
            {error}
            <p className="text-sm text-white text-center">
            ¿No tienes cuenta aún? <NavLink to="/signup">Registrate</NavLink>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;