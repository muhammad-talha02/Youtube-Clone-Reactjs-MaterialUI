import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={() => console.log("Submitting")}
      sx={{
        borderRadius: 20,
        border: "1px solide #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <IconButton
        type="submit"
        color="error"
        sx={{ p: "10px" }}
        onClick={handleSubmit}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
