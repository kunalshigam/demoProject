import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

export default styled(Drawer)(({ theme, ownerState }) => {
  const { boxShadows, functions, transitions } = theme;
  const { openBottomNav } = ownerState;

  const configuratorWidth = 360;
  const { lg } = boxShadows;
  const { pxToRem } = functions;

  // drawer styles when openBottomNav={true}
  const drawerOpenStyles = () => ({
    width: "100%",
    boxShadow: "0rem 1.25rem 1.6875rem 0rem rgb(83 81 250 / 35%)",
    borderRadius: "1.5rem",
    padding: "1rem",
    position: "absolute",
    // top: "initial",
    bottom: 0,
    // transition: transitions.create("bottom", {
    //   easing: transitions.easing.sharp,
    //   duration: transitions.duration.short,
    // }),
  });

  // drawer styles when openBottomNav={false}
  const drawerCloseStyles = () => ({
    left: "initial",
    right: pxToRem(-350),
    // transition: transitions.create("all", {
    //   easing: transitions.easing.sharp,
    //   duration: transitions.duration.short,
    // }),
  });

  return {
    "& .MuiDrawer-paper": {
      // height: "100vh",
      height: "calc(100vh - 7rem)",
      margin: 0,
      // padding: `0 ${pxToRem(10)}`,
      borderRadius: 0,
      boxShadow: lg,
      overflowY: "auto",
      ...(openBottomNav ? drawerOpenStyles() : drawerCloseStyles()),
    },
  };
});
