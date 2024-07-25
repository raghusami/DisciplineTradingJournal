// src/pages/LoginPage.js
import React, { useState } from 'react';
import { Typography } from '@mui/material';
import {
  Container,
  Logo,
  Title,
  Subtitle,
  StyledTextField,
  StyledButton,
  StyledDivider,
  StyledLink,
  teamColors,
} from '../CommonStyles';
import logo from '../logo.svg';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { email, password });
    onLogin();
  };

  return (
    <Container>
      <Logo src={logo} alt="DisciplineTrade" />
      <Title variant="h5">Sign In</Title>
      <Subtitle variant="subtitle1">Sign in to DisciplineTrade platform</Subtitle>
      <form onSubmit={handleSubmit}>
        <StyledTextField
          label="Email"
          variant="outlined"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <StyledTextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Typography variant="body2" align="right">
          <StyledLink href="/auth/recover">Forgot password</StyledLink>
        </Typography>
        <StyledButton variant="contained" color="primary" type="submit">
          Sign In
        </StyledButton>
      </form>
      <StyledDivider />
      <Typography variant="body2" align="center">
        Don’t have an account?{' '}
        <StyledLink href="/auth/register">Sign up</StyledLink>
      </Typography>
    </Container>
  );
};

export default LoginPage;
