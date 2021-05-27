import {
  AppBar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Link,
  Typography,
  MenuItem,
  makeStyles,
  Grid,
  Tabs,
  Tab,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";

const useStyle = makeStyles(() => ({
  menuitem: {
    marginLeft: "auto",
  },
}));
export const Header = () => {
  const classes = useStyle();
  return (
    <div>
      <AppBar style={{ backgroundColor: "#0d4559" }}>
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Tabs className={classes.menuitem}>
            <Tab label="Dashboard" onClick={<Link href="/" />} />
            <Tab label="Tickets" onClick={<Link href="/" />} />
            <Tab label="Logout" onClick={<Link href="/" />} />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};
