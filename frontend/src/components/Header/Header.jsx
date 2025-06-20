import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

import { isAuthenticated } from "../Auth/isAuthenticate";
const pages = [
    "Home",
    "Explore Career",
    "Skill test",
    "AI assistant",
    "Article & Advice",
    "About",
    "Contact",
];


function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const isLoggedIn = isAuthenticated()
    const settings = isLoggedIn ? ["Profile", "Account", "Dashboard", "Settings" ] : ["Login", "SignUp"]
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Function to check if "dark" class is applied to <html>
        const checkDarkMode = () => {
            const html = document.documentElement;
            setIsDark(html.classList.contains("dark"));
        };

        // Initial check
        checkDarkMode();

        // Watch for changes in class attribute on <html>
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        // Cleanup
        return () => observer.disconnect();
    }, []);

    return (
        <AppBar
            position="relative"
            sx={{
                zIndex: 1000,
                backgroundColor: isDark ? "#313131" : "#DDF5FF",
                boxShadow: isDark ? "0 0 10px rgba(0, 0, 0, 0.5)" : "none",
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AutoStoriesIcon
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: isDark ? "#ffd230" : "#9c27b0" }}
                    />
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon sx={{ color: isDark ? "#ffffff" : "#000000" }} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: "block", md: "none" } }}
                        >
                            {pages.map((page) => (
                                <Link
                                    key={page}
                                    to={`/${page.toLowerCase()}`}
                                    style={{ textDecoration: "none" }}
                                >
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography sx={{ textAlign: "center", color: isDark ? "#ffffff" : "#000000" }}>{page}</Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    <AutoStoriesIcon
                        sx={{ display: { xs: "flex", md: "none" }, mr: 1, color: isDark ? "#fdc700" : "#9c27b0" }}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "Open Sans",
                            fontWeight: 600,
                            letterSpacing: ".1rem",
                            color: isDark ? "#29b6f6" : "#1a73e8",
                            textDecoration: "none",
                        }}
                    >
                        CAREER LIFT
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            colorScheme: "dark",
                        }}
                    >
                        {pages.map((page) => (
                            <Link
                                key={page}
                                to={`/${page.toLowerCase()}`}
                                style={{ textDecoration: "none" }}
                            >
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: isDark ? "#ffffff" : "#000000", display: "block" }}
                                >
                                    {page}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <Link key={setting} to={`/${setting.toLowerCase()}`}>
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography sx={{ textAlign: "center", color: isDark ? "#ffffff" : "#000000" }}>
                                            {setting}
                                        </Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
