import { Button } from "@mui/material";
import axios from "axios";
import React from "react";

const Admin = () => {
  const handleClick = async () => {
    await axios.get(`${process.env.REACT_APP_API_URL}/update`);
  };
  return (
    <>
      <div className="main_cont">
        <Button variant="contained" onClick={handleClick}>
          Update
        </Button>
      </div>
    </>
  );
};

export default Admin;
