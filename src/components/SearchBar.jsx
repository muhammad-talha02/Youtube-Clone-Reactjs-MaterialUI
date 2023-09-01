import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
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
        onChange={() => {}}
        value=""
      />
      <IconButton type="submit" color="error" sx={{p:"10px"}}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
