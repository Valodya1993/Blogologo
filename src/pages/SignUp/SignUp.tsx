import styled from "styled-components";
import { Button } from "../../components/button/button";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Input } from "../../components/input/input";
import { Container, InputContainer } from "../../components/layout/wrapper";
import { PageTitle } from "../../components/pageTitle/pageTitle";
import { useTheme } from "../../context/themeContext/theme-context";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { addNewUser } from "../../helpers/LocalStorage";

export const SignUp = () => {
    const { theme } = useTheme();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const nameError =
        !!name && name.length < 2 ? "Name must be at least 2 characters" : "";

    const emailError =
        !!email && !email.includes("@") ? "Enter a valid email address" : "";

    const passwordError =
        !!password && password.length < 8 ? "Password must be at least 8 characters" : "";

    const confirmError =
        !!confirmPassword && password !== confirmPassword
            ? "Passwords do not match"
            : "";

    const handleSignUp = () => {
        if (!nameError && !emailError && !passwordError && !confirmError) {
            addNewUser(name, email, password);
            navigate('/');
        }
    };

    return (
        <>
            <Header />
            <Container style={{ flexDirection: 'column' }}>
                <PageTitle title='Sign Up' button='Back to home' />
                <InputContainer style={{
                    background: theme.colors.bg_header,
                    color: theme.colors.text
                }}>
                    <Input title="name" type="text" value={name} onChange={(e) => setName(e.target.value)} error={!!nameError} />
                    {nameError && <ErrorMessage>{nameError}</ErrorMessage>}
                    <Input title="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} error={!!emailError} />
                    {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
                    <Input title="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} error={!!passwordError} />
                    {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
                    <Input
                        title="confirm password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        error={!!confirmError}
                    />
                    {confirmError && <ErrorMessage>{confirmError}</ErrorMessage>}
                    <Button style="primary" content="Sign Up" onClick={handleSignUp} />
                    <Text>Already have an account? <Link to='/signin' style={{
                        color: '#6C1BDB',
                        fontWeight: 'bold'
                    }}>Sign In</Link></Text>
                </InputContainer>
            </Container>
            <Footer />
        </>
    );
}

const Text = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-top: 24px;
    text-align: center;
`;

const ErrorMessage = styled.p`
    color: red;
    margin-left: 15px;
    margin-bottom: 15px;
`;