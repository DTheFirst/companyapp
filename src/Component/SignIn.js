import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, provider } from "./../Firebase/config";
import { signInWithPopup } from "firebase/auth";
import "./login.css";

const SignIn = () => {
    const [value, setValue] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                navigate("/company");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const google = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email);
            localStorage.setItem("email", data.user.email);
            navigate("/company");
        });
    };

    return (
        <div className="sign-in-container">
            <form onSubmit={signIn}>
                <h1>Log In to your Account</h1>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button type="submit" onClick={signIn}>
                    Log In
                </button>
                <button onClick={google}>SignIn With Google</button>
                <Link to="/register">Don't have an account?</Link>
            </form>
        </div>
    );
};

export default SignIn;
