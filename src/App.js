import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/home";
import Company from "./Component/Company";
import { Provider } from "react-redux";
import compstore from "./Redux/Store";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./PrivateRoute";
import SignIn from "./Component/SignIn";
import SignUp from "./Component/SignUp";

const App = () => {
    return (
        <Provider store={compstore}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/register" element={<SignUp></SignUp>}></Route>
                    <Route path="/login" element={<SignIn></SignIn>}></Route>
                    <Route element={<PrivateRoute />}>
                        <Route path="/company" element={<Company></Company>} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <ToastContainer position="top-right"></ToastContainer>
        </Provider>
    );
};

export default App;
