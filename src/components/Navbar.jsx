import { Stack } from "@mui/material";
import {Link} from "react-router-dom"

// utils
import { logo, mobileLogo } from "../utils/constant";
import SearchBar from "./SearchBar";
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
      <Link to="/" style={{display:"flex", alignItems:"center"}}>
        <img src={logo} alt="" className="logo" height={45}/>
        <img src={mobileLogo} alt="" className="mobile_logo" height={45}/>
      </Link>
      <SearchBar/>
    </Stack>
  );
};

export default Navbar;
