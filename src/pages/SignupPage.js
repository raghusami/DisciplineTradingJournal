// src/pages/SignupPage.js
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';  // Add this import
import {
  Container,
  Logo,
  Title,
  Subtitle,
  StyledTextField,
  StyledButton,
  StyledDivider,
  StyledLink,
  ValidationItem,
  teamColors,
  GradientTextLogo
} from '../CommonStyles';
import logo from '../logo.svg';

const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { firstName, lastName, username, email, password, repeatPassword, mobileNumber });
  };

  return (
    <Container style={{ position: 'relative', overflowY: 'auto' }}>
      <Logo src={logo} alt="DisciplineTrade" />
      <Title variant="h5">Welcome to <GradientTextLogo>DisciplineTrade</GradientTextLogo></Title>
      <Subtitle variant="subtitle1">We help traders become profitable.</Subtitle>
      <form onSubmit={handleSubmit}>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <StyledTextField
            label="First name"
            variant="outlined"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            sx={{ flex: 1, mr: 1 }}
          />
          <StyledTextField
            label="Last name"
            variant="outlined"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            sx={{ flex: 1, ml: 1 }}
          />
        </Box>
        <StyledTextField
          label="Username"
          variant="outlined"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <StyledTextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Box display="flex" justifyContent="space-between" mb={2}>
          <StyledTextField
            label="Create password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{ flex: 1, mr: 1 }}
          />
          <StyledTextField
            label="Repeat password"
            variant="outlined"
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
            sx={{ flex: 1, ml: 1 }}
          />
        </Box>
        <StyledTextField
          label="Mobile number"
          variant="outlined"
          type="text"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          required
        />
        <Box
          mt={1}
          p={1}
          bgcolor={teamColors.lightBackground}
          borderRadius={2}
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(150px, 1fr))"
          gap={1}
        >
          <ValidationItem>
            <CheckIcon color="success" />
            <Typography variant="body2" marginLeft={1}>
              8 Character minimum
            </Typography>
          </ValidationItem>
          <ValidationItem>
            <CheckIcon color="success" />
            <Typography variant="body2" marginLeft={1}>
              1 Special Character
            </Typography>
          </ValidationItem>
          <ValidationItem>
            <CheckIcon color="success" />
            <Typography variant="body2" marginLeft={1}>
              1 Number
            </Typography>
          </ValidationItem>
          <ValidationItem>
            <CheckIcon color="success" />
            <Typography variant="body2" marginLeft={1}>
              1 Lowercase Character
            </Typography>
          </ValidationItem>
          <ValidationItem>
            <CheckIcon color="success" />
            <Typography variant="body2" marginLeft={1}>
              1 Uppercase Character
            </Typography>
          </ValidationItem>
        </Box>
        <StyledButton variant="contained" color="primary" type="submit">
          Sign Up
        </StyledButton>
      </form>
      <StyledDivider />
      <Typography variant="body2" align="center">
        Already have an account?{' '}
        <StyledLink href="/auth/login">Sign in</StyledLink>
      </Typography>
    </Container>
  );
};

export default SignupPage;
