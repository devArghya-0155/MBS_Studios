// About
// Media News Purchase
// Social Media Contact Us
import { Link } from "react-router-dom";
import { Box, Button, IconButton, Stack } from "@mui/material";

import styles from "./Navbar.module.css";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <Stack
      flexDirection={"row"}
      className={styles.navbar}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <IconButton>
        <Link to="/">
          <img
            src={Logo}
            style={{
              width: "80px",
              height: "60px",
              marginLeft: "5px",
              marginRight: "5px",
            }}
          />
        </Link>
      </IconButton>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        gap={"40px"}
        mr={2}
        className={styles.navItems}
      >
        <Button>
          <Link to="/about">
            <span></span>
          </Link>
          <Link to="/about">
            <span>About</span>
          </Link>
        </Button>
        <Button>
          <Link to="/media">
            <span>Media</span>
          </Link>
        </Button>
        <Button>
          <Link to="/news">
            <span>News</span>
          </Link>
        </Button>
        <Button>
          <Link to="/social">
            <span>Social Media</span>
          </Link>
        </Button>
        <Button>
          <Link to="/contact_us">
            <span>Contacts Us</span>
          </Link>
        </Button>
        <Button variant={"contained"}>
          <Link to="/purchase">
            <span>Purchase</span>
          </Link>
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
