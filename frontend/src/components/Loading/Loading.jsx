import { CircularProgress } from "@mui/material";
import React from "react";

function Loading() {
  return (
    <>
    <div style={{textAlign:"center"}}>
      <h1>Loading...</h1>
      <CircularProgress />
      </div>
    </>
  );
}

export default Loading;
