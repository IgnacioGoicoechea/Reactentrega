import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../main";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                navigate("/login");
               ;
            })
            .catch((error) => {
                // An error happened.
            });
    };

    return (
        <>
            <nav>
                <div class="login-box">
                    <h2>Login</h2>
                    <form>


                        <a onClick={handleLogout}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Entrar
                        </a>
                    </form>
                </div>

            </nav>
        </>
    );
};

export default Home;