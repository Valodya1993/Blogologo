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
    const [error, setError] = useState("");

    const confirmPasswordError = confirmPassword.length > 0 && password !== confirmPassword;

    const handleSignUp = () => {

        if (password !== confirmPassword) {
            console.log("❌ Passwords do not match");
            return;
        }

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Confirm password:", confirmPassword);

        if (!name || !email || !password || !confirmPassword) {
            setError("Please fill all fields");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setError("");
        console.log("SUCCESS:", { name, email, password });

        addNewUser(name, email, password); 
        navigate('/');
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
                    <Input title="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <Input title="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} error={!!email && !email.includes('@')}/>
                    <Input title="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} error={!!password && password.length < 8}/>
                    <Input
                        title="confirm password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        error={!!confirmPassword && password !== confirmPassword}
                    />
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