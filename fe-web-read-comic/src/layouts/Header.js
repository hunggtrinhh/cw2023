import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  createTheme,
  useScrollTrigger
} from "@mui/material";
import { useState } from "react";
import DrawerSearchComic from "../components/DrawerSearchComic";
const theme = createTheme();

const headerStyle = {
  px: theme.spacing(4),
  backgroundColor: "#e3e3e3",
  "& .MuiInputBase-input": {
    p: theme.spacing(1, 1.5),
  },
  "& .MuiInputBase-root": {
    pl: theme.spacing(1.5),
  },
  "& .MuiIconButton-root": {
    ml: theme.spacing(2),
  },
};

export default function Header(props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const [drawerSearchToggle, setDrawerSearchToggle] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const drawerSearchId = "drawer-search";

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircleIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar sx={headerStyle} elevation={trigger ? 1 : 0}>
      <Toolbar>
        <Typography variant="h6">NAME WEBSITE</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          color="inherit"
          size="medium"
          edge="end"
          onClick={() => setDrawerSearchToggle(true)}
        >
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit" size="medium" edge="end">
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          color="inherit"
          size="medium"
          edge="end"
          onClick={handleProfileMenuOpen}
          aria-controls={menuId}
        >
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      <DrawerSearchComic
        id={drawerSearchId}
        drawerSearchToggle={drawerSearchToggle}
        setDrawerSearchToggle={setDrawerSearchToggle}
      />
      {renderMenu}
      {renderMobileMenu}
    </AppBar>
  );
}
