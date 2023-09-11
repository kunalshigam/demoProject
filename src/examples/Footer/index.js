import PropTypes from "prop-types";

// @mui material components
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";

// Material Dashboard 2 React components
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";

import { useMaterialUIController, setOpenBottomNav } from "../../context";

// Material Dashboard 2 React base styles
import typography from "../../assets/theme/base/typography";

import Dashboard from "../../layouts/dashboard";
import { useState } from "react";

function Footer({ links }) {
  const [controller, dispatch] = useMaterialUIController();
  const {
    openBottomNav
  } = controller;
  const { size } = typography;

  // const [openMenu, setOpenMenu] = useState(false);

  // const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  // const handleCloseMenu = () => setOpenMenu(false);

  const handleBottomNavOptionsOpen = () => setOpenBottomNav(dispatch, !openBottomNav);

  const renderLinks = () =>
    links.map((link, key) => (
      <MDBox
        key={link.name}
        component="li"
        px={2}
        lineHeight={1}
        // display="flex"
        // justifyContent="center"
        // alignItems="center"
        // width="3.25rem"
        // height="3.25rem"
        // bgColor="white"
        // shadow="sm"
        // borderRadius="50%"
        // position="fixed"
        // right="2rem"
        // bottom="2rem"
        // zIndex={99}
        // color="dark"
        sx={{ cursor: "pointer" }}
        onClick={handleBottomNavOptionsOpen}
      >
        <MDTypography variant="button" fontWeight="regular" color="text">
          {link.name}
        </MDTypography>
      </MDBox>

      // <MDBox key={link.name} component="li" px={2} lineHeight={1}>
      //   <Link
      //     href={link.href}
      //     key={key}
      //     target="_blank"
      //     rel="noreferrer"
      //     sx={{ textDecoration: "none" }}
      //     onClick={handleOpenMenu}
      //   >
      //     <MDTypography variant="button" fontWeight="regular" color="text">
      //       {link.name}
      //     </MDTypography>
      //   </Link>
      // </MDBox>
    ));

  return (
    <MDBox
      sx={({ functions: { pxToRem } }) => ({
        p: 3,
        position: "relative",
        background: "#f1f3ff",
        boxShadow: "0rem 1.25rem 1.6875rem 0rem rgb(83 81 250 / 35%)",
        padding: pxToRem(16),
        borderRadius: pxToRem(24),
      })}
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="center"
      alignItems="center"
      px={1.5}
    >
      {/* <MDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="text"
        fontSize={size.sm}
        px={1.5}
      >
        &copy; {new Date().getFullYear()}, made with
        <MDBox fontSize={size.md} color="text" mb={-0.5} mx={0.25}>
          <Icon color="inherit" fontSize="inherit">
            favorite
          </Icon>
        </MDBox>
        by
        <Link href={href} target="_blank">
          <MDTypography variant="button" fontWeight="medium">
            &nbsp;{name}&nbsp;
          </MDTypography>
        </Link>
         for a better web.
      </MDBox> */}
      <MDBox
        component="ul"
        sx={({ breakpoints }) => ({
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          listStyle: "none",
          mt: 3,
          mb: 0,
          p: 0,

          [breakpoints.up("lg")]: {
            mt: 0,
          },
        })}
      >
        {renderLinks()}
      </MDBox>
    </MDBox>
  );
}

// Setting default values for the props of Footer
Footer.defaultProps = {
  links: [
    { href: "about", name: "About Us", key: "aboutus", type: "collapse" },
    { href: "blog", name: "Blog", key: "blog", type: "collapse" },
    { href: "license", name: "License", key: "license", type: "collapse" },
  ],
};

// Typechecking props for the Footer
Footer.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
};

export default Footer;
