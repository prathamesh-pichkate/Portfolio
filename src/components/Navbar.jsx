import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import GitHubIcon from '@mui/icons-material/GitHub';
import AdbIcon from '@mui/icons-material/Adb';
import '@fontsource/titillium-web'; 

const pages = ['Home', 'Skills', 'Blogs', 'Projects', 'Experience'];




function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navStyles = {
    fontFamily: 'Titillium Web, sans-serif',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 500,
    color: '#3a93bd',
    position: 'relative',
    textDecoration: 'none',
    fontSize: '15px',
    padding: '.5em .8em',
    
    '&::before, &::after': {
      content: '""',
      height: '10px',
      width: '10px',
      position: 'absolute',
      transition: 'all .30s ease',
      opacity: 0,
    },
    '&::before': {
      right: 0,
      top: 0,
      borderTop: '2px solid black',
      borderRight: '2px solid black',
      transform: 'translate(-100%, 50%)',
    },
    '&::after': {
      left: 0,
      bottom: 0,
      borderBottom: '2px solid black',
      borderLeft: '2px solid black',
      transform: 'translate(100%, -50%)',
    },
    '&:hover::before, &:hover::after': {
      transform: 'translate(0,0)',
      opacity: 1,
    },
    '&:hover': {
      color: 'blue',
    },
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#ededed", color: '#dfdfdf' }} elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ padding: '0 16px' }}>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#1d6687' }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'sans',
              fontWeight: 700,
              color: '#1b6d89',
              textDecoration: 'none',
            }}
          >
            Portfolio
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{ color: '#1b6d89' }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    sx={navStyles}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile View */}
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: '#1d6687' }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'sans',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: '#1b6d89',
              textDecoration: 'none',
            }}
          >
            Portfolio
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                href={`/${page.toLowerCase()}`}
                sx={navStyles}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" href= {process.env.REACT_APP_GithubLink}>
              <button 
                className="flex gap-2 cursor-pointer text-white text-sm bg-gradient-to-r from-gray-800 to-black px-1 py-1 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
                <GitHubIcon style={{ color: 'white', height: "1.2rem", width: "1.2rem" }} />
                Github
              </button>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
