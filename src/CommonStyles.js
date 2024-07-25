// src/CommonStyles.js
import { styled } from '@mui/system';
import { Box, TextField, Button, Typography, Divider, Link ,Tab} from '@mui/material';

const teamColors = {
  primary: '#6357A6',
  secondary: '#470CED',
  focus: '#2C13AD',
  link: '#7858FF',
  lightBackground: '#F5F5F5',
  lightText: '#B0B0B0',
};

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
  maxWidth: 600,
  margin: 'auto',
  marginTop: theme.spacing(8),
}));

export const Logo = styled('img')(({ theme }) => ({
  width: 100,
  marginBottom: theme.spacing(2),
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: '#161828',
  display: 'flex',
  fontSize: '32px',
  marginTop: '32px',
  fontFamily: 'Inter, sans-serif',
  fontWeight: 700,
  marginBottom: '12px',
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  color: '#565C89',
  fontSize: '16px',
  maxWidth: '382px',
  textAlign: 'center',
  fontFamily: 'Inter, sans-serif',
  fontWeight: 400,
  lineHeight: '36px',
  marginBottom: theme.spacing(2),
}));
export const SubtitleOne = styled(Typography)(({ theme }) => ({
  color: '#565C89',
  fontSize: '12px',
  maxWidth: '382px',
  textAlign: 'left',
  fontFamily: 'Inter, sans-serif',
  fontWeight: 600,
  lineHeight: '36px',
  marginBottom: theme.spacing(0),
}));
export const SubtitleTwo = styled(Typography)(({ theme }) => ({
  color: '#565C89',
  fontSize: '12px',
  maxWidth: 'auto',
  textAlign: 'right',
  fontFamily: 'Inter, sans-serif',
  fontWeight: 500,
  lineHeight: '36px',
  marginBottom: theme.spacing(0),
}));
export const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  width: '100%',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: teamColors.primary,
    },
    '&:hover fieldset': {
      borderColor: teamColors.secondary,
    },
    '&.Mui-focused fieldset': {
      borderColor: teamColors.focus,
    },
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  width: '100%',
  backgroundColor: teamColors.primary,
  '&:hover': {
    backgroundColor: teamColors.secondary,
  },
}));
export const StyledAddButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  width: '60%',
  backgroundColor: teamColors.primary,
  marginLeft:'20px',
  '&:hover': {
    backgroundColor: teamColors.secondary,
  },
}));
export const StyledDivider = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(2, 0),
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  fontWeight: 'bold',
  textDecoration: 'none',
  color: teamColors.link,
  '&:hover': {
    color: teamColors.focus,
  },
}));

export const ValidationItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  mb: theme.spacing(1),
  fontSize: '0.875rem',
  color: teamColors.lightText,
}));

export const GradientText = styled('span')(({ theme }) => ({
  background: 'linear-gradient(90deg, #470CED 0%, #1C0C6E 100%)',
  paddingLeft: '4px',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));
export const GradientTextLogo = styled('span')(({ theme }) => ({
  background: 'linear-gradient(90deg, #470CED 0%, #7858FF 100%)',
  paddingLeft: '4px',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

// Styled Tab component
export const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  color: teamColors.primary, // Default color for inactive tabs
  '&.Mui-selected': {
    color: teamColors.secondary, // Color for active tab
    backgroundcolor:teamColors.primary,
  },
  '&.MuiTab-root': {
    fontSize: '14px', // Adjust text size
    fontWeight: 600,  // Adjust text weight
  }
}));
export { teamColors };
