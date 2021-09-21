import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import logo from "../../logo.svg";
import "@progress/kendo-theme-material/dist/all.css";
// import "../styles/App.scss";
import clsx from "clsx";
import { alpha, makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import StoreIcon from "@material-ui/icons/Store";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PaymentIcon from "@material-ui/icons/Payment";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";
import ViewListIcon from "@material-ui/icons/ViewList";
import SettingsIcon from "@material-ui/icons/Settings";
import ReportIcon from "@material-ui/icons/Report";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";
// import ProfilePic from "./assets/img/ProfilePic.png"
import PersonIcon from "@material-ui/icons/Person";
import CarAssignmentPanel from "../forms/CarAssignmentPanel.jsx";
import CargoCompanies from "../forms/CargoCompanies.jsx";
import SendRequest from "../forms/SendRequest.jsx";
import ShippingApplicants from "../forms/ShippingApplicants.jsx";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#000",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  toolbarMain: { minHeight: "48px" },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

function HomePage() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [profilePic, setProfilePic] = React.useState("");
  const [openSaveDialog, setOpenSaveDialog] = useState({
    open: false,
    title: "",
    content: "",
    buttons: {},
  });
  const forms = {
    CarAssignmentPanel: false,
    CargoCompanies: false,
    SendRequest: false,
    ShippingApplicants: false,
  };

  const activeForm = (formname) => {
    setShowForm({ ...forms, [formname]: true });
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const setIcon = (iconName) => {
    switch (iconName) {
      default:
        return <DashboardIcon />;
        break;
    }
  };

  //start
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = (mode) => (e) => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose()}
    >
      <MenuItem onClick={handleMenuClose("profile")}>Profile</MenuItem>

      <MenuItem onClick={handleMenuClose("MyAccount")}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose("logout")}>Log Out</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Avatar
          alt="Soheil Jafarzade"
          src={profilePic}
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        />
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  //end
  const [showForm, setShowForm] = React.useState(forms);

  const handleClickForm = (e) => {
    const formname = e.currentTarget.getAttribute("formname");
    if (!formname) return;
    const index = {
      CargoCompanies: 0,
      ShippingApplicants: 1,
      SendRequest: 2,
      CarAssignmentPanel: 3,
    }[formname];
    setSelectedIndex(index);
    activeForm(formname);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>

          <div className={classes.grow} />
          <Typography variant="h6" className={classes.menuButton} noWrap>
            {"Golgohar"}
          </Typography>
          <div className={classes.sectionDesktop}>
            <Avatar
              alt="Soheil Jafarzade"
              src={profilePic}
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            />
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        {/* <List>
          {["Dashboard"].map((text, index) => (
            <ListItem
              button
              key={text}
              onClick={handleClickForm}
              formname={text}
            >
              <ListItemIcon>{setIcon(text)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider /> */}
        <List>
          {[
            { name: "CargoCompanies", title: "موسسات باربری" },
            { name: "ShippingApplicants", title: "متقاضیان حمل" },
            { name: "SendRequest", title: "درخواست ارسال" },
            { name: "CarAssignmentPanel", title: "پنل اختصاص خودرو" },
          ].map((el, index) => (
            <Tooltip title={el.title} key={el.name}>
              <ListItem
                button
                key={el.name}
                onClick={handleClickForm}
                formname={el.name}
                selected={selectedIndex === index}
              >
                <ListItemIcon>{setIcon(el.name)}</ListItemIcon>
                <ListItemText primary={el.title} />
              </ListItem>
            </Tooltip>
          ))}
        </List>
      </Drawer>
      <main id="main" className={classes.content}>
        <div className={(classes.toolbar, classes.toolbarMain)} />
        {/* {showForm.Dashboard ? <Dashboard /> : null} */}
        {showForm.CarAssignmentPanel ? <CarAssignmentPanel /> : null}
        {showForm.CargoCompanies ? <CargoCompanies /> : null}
        {showForm.SendRequest ? <SendRequest /> : null}
        {showForm.ShippingApplicants ? <ShippingApplicants /> : null}
      </main>
    </div>
  );
}

export default HomePage;
