import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#333333',
        color: '#fff',
        padding: '20px',
        textAlign: 'center',
        width: '100%',
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: '10px' }}>
        © 2024 Chamod Weerasinghe
      </Typography>
      <Box
        sx={{
          marginTop: '1.5%',
          display: 'flex',
          justifyContent: 'center',
          gap: '2%',
          flexWrap: 'wrap',
        }}
      >
        <Link href="#" underline="none" sx={{ color: '#fff' }}>
          Home
        </Link>
        <Link href="#" underline="none" sx={{ color: '#fff' }}>
          Skills
        </Link>
        <Link href="#" underline="none" sx={{ color: '#fff' }}>
          Services
        </Link>
        <Link href="#" underline="none" sx={{ color: '#fff' }}>
          Blog
        </Link>
        <Link href="#" underline="none" sx={{ color: '#fff' }}>
          Contact
        </Link>
        <Link href="#" underline="none" sx={{ color: '#fff' }}>
          About
        </Link>
      </Box>

      <Box
        sx={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          gap: '2%',
        }}
      >
        <IconButton href="https://github.com/your-profile" sx={{ color: '#fff' }}>
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://instagram.com/your-profile" sx={{ color: '#fff' }}>
          <InstagramIcon />
        </IconButton>
        <IconButton href="https://linkedin.com/in/your-profile" sx={{ color: '#fff' }}>
          <LinkedInIcon />
        </IconButton>
      </Box>

      <Typography
        variant="body2"
        sx={{
          marginTop: '20px',
          fontSize: '12px',
          color: 'rgba(255, 255, 255, 0.7)',
        }}
      >
        Designed & Developed by Chamod Weerasinghe
      </Typography>
    </Box>
  );
};

export default Footer;
