import { Route, Routes } from "react-router-dom";
import { Main } from "../pages/MainPage/Main";
import { SignIn } from "../pages/SignIn/SignIn";
import { SignUp } from "../pages/SignUp/SignUp";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route></Route>
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    );
}