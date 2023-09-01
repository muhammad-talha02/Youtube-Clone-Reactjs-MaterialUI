import { Stack } from "@mui/material";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        top: "0px",
        backgroundColor: "#000",
        justifyContent: "space-between",
      }}
    >
      Navbar
    </Stack>
  );
};

export default Navbar;
