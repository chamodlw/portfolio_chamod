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
      <Typography variant="h6" sx={{
        marginBottom: '10px', fontSize: {
          xs: '11px',
          sm: '18px',
        },
      }}>
        © 2025 Chamod Weerasinghe
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
        <Link href="/" underline="none" sx={{
          color: '#fff', fontSize: {
            xs: '13px',
            sm: '18px',
          }
        }}>
          Home
        </Link>
        <Link href="/skills" underline="none" sx={{
          color: '#fff', fontSize: {
            xs: '13px',
            sm: '18px',
          }
        }}>
          Skills
        </Link>
        <Link href="/projects" underline="none" sx={{
          color: '#fff', fontSize: {
            xs: '13px',
            sm: '18px',
          }
        }}>
          Projects
        </Link>
        <Link href="/blog" underline="none" sx={{
          color: '#fff', fontSize: {
            xs: '13px',
            sm: '18px',
          }
        }}>
          Blogs
        </Link>
        <Link href="/contact" underline="none" sx={{
          color: '#fff', fontSize: {
            xs: '13px',
            sm: '18px',
          }
        }}>
          Contact
        </Link>
        <Link href="/education" underline="none" sx={{
          color: '#fff', fontSize: {
            xs: '13px',
            sm: '18px',
          }
        }}>
          Education
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
        <IconButton href="https://github.com/chamodlw" sx={{ color: '#fff' }}>
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://www.instagram.com/weere__cl00___/" sx={{ color: '#fff' }}>
          <InstagramIcon />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/chamod-weerasinghe-b89aaa293/" sx={{ color: '#fff' }}>
          <LinkedInIcon />
        </IconButton>
      </Box>

      <Typography
        variant="body2"
        sx={{
          marginTop: '20px', fontSize: {
            xs: '9px',
            sm: '13px',
          },
          color: 'rgba(255, 255, 255, 0.7)',
        }}
      >
        Designed & Developed by Chamod Weerasinghe
      </Typography>
    </Box>
  );
};

export default Footer;
