import { Stack,Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <div className="logo-name" style={{display:'flex', gap:'10px'}}>
      <img src={logo} alt="logo" height={45} />
      <Typography className="logo-varient" variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          <span >Play Loop</span>
        </Typography>
      </div>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
