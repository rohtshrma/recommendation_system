import React from "react";
import { Stack } from "react-bootstrap";
import "./style.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <Stack gap={3} className="mainContainer">
        <div>
          <button className="active">Get Started</button>
        </div>
        <div>
          <button>Children </button>
        </div>

        <div>
          <button>Room Size</button>
        </div>
        <div>
          <button>Price</button>
        </div>
        <div>
          <button>Results</button>
        </div>
      </Stack>
    </div>
  );
}

export default Sidebar;
