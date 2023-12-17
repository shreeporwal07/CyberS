import React from "react";
import logo from "../../assets/img/logo.png";
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
import { useAuth0 } from "@auth0/auth0-react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import classes from "../Styles/Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import Search from "../Helpers/Search";
import Cart from "../Helpers/Cart";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { useState } from "react";

const pages = [{ id: 1, name: "Home", to: "/Home" }];

function Header() {
  const cartCtx = useContext(CartContext);
  const totalItems = cartCtx.items.length;
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "rgba(8, 32, 50, 0.5)" }}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip>
                <IconButton href={pages[0].to}>
                  <Avatar
                    src={logo}
                    style={{ height: "70px", width: "70px" }}
                  />
                </IconButton>
              </Tooltip>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                ml: 6,
                mr: 14,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 800,
                fontSize: "1.5rem",
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ZenBazaar
            </Typography>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                ml: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ZenBazaar
            </Typography>

            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    href={page.to}
                    key={page}
                    onClick={handleCloseNavMenu}
                  >
                    <Button
                      href={page.to}
                      key={page.name}
                      sx={{ my: 2, mr: 3, color: "#082032", display: "block" }}
                    >
                      {page.name}
                    </Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page) => (
                <Button
                  href={page.to}
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mr: 7,
                    color: "white",
                    display: "block",
                    fontWeight: "800",
                    borderRadius: 2,
                    pl: "1.3rem",
                    pr: "1.3rem",
                    "&:hover": {
                      backgroundColor: "rgba(255, 76, 41, 0.8)", // 50% transparency
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}
              <Button
                key={"Cart"}
                onClick={() => setSearch(true)}
                sx={{
                  my: 2,
                  mr: 7,
                  color: "white",

                  fontWeight: "800",
                  borderRadius: 2,
                  pl: "1.3rem",
                  pr: "1.3rem",
                  "&:hover": {
                    backgroundColor: "rgba(255, 76, 41, 0.8)", // 50% transparency
                  },
                }}
              >
                <SearchIcon className={classes.search} />
              </Button>

              <Button
                key={"Cart"}
                onClick={() => setShowCart(true)}
                sx={{
                  my: 2,
                  mr: 7,
                  color: "white",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight: "800",
                  borderRadius: 2,
                  pl: "1.3rem",
                  pr: "1.3rem",
                  "&:hover": {
                    backgroundColor: "rgba(255, 76, 41, 0.8)", // 50% transparency
                  },
                }}
              >
                <ShoppingCartIcon className={classes.cart} />
                <span className={classes.badge}>{totalItems}</span>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {showCart && <Cart setShowCart={setShowCart} />}
      {search && <Search setSearch={setSearch} />}
    </>
  );
}

export default Header;
