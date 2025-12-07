import { Route, Routes } from "react-router-dom";
import { Main } from "../pages/MainPage/Main";
import { SignIn } from "../pages/SignIn/SignIn";
import { SignUp } from "../pages/SignUp/SignUp";
import { FullPage } from "../pages/FullPage/FullPage";
import { SearchPage } from "../pages/SearchPage/SearchPage";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/article/:id" element={<FullPage />}></Route>
            <Route path="/search/:word" element={<SearchPage />} />
            <Route path="/search/" element={<Main />} />

            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    );
}