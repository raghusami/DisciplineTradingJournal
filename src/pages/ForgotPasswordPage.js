// src/pages/ForgotPasswordPage.js
import React, { useState } from 'react';
import { Typography } from '@mui/material';
import {
  Container,
  Logo,
  Title,
  Subtitle,
  StyledTextField,
  StyledButton,
  StyledLink,
} from '../CommonStyles';
import logo from '../logo.svg';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password recovery email sent to:', email);
  };

  return (
    <Container>
      <Logo src={logo} alt="DisciplineTrade" />
      <Title variant="h5">Forgot Password</Title>
      <Subtitle variant="subtitle1">Enter your email to recover your password</Subtitle>
      <form onSubmit={handleSubmit}>
        <StyledTextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <StyledButton variant="contained" color="primary" type="submit">
          Send Recovery Email
        </StyledButton>
      </form>
      <Typography variant="body2" align="center" mt={2}>
        Remember your password?{' '}
        <StyledLink href="/auth/login">Sign in</StyledLink>
      </Typography>
    </Container>
  );
};

export default ForgotPasswordPage;
