import { Button } from "@material-ui/core";
import React from "react";

function Header() {
  return (
    <div>
      <div
        className="header"
        style={{
          // backgroundColor: "#012a4a",
          paddingTop: "15px",
          paddingBottom: "15px",
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "10px",
          color: "white",
        }}
      >
        <div
          style={{
            marginLeft: "100px",
            fontSize: "22px",
            alignItems: "center",
          }}
        >
          Project Report
        </div>
        <Button
          variant="contained"
          style={{ marginRight: "50px", background: "lightblue" }}
        >
          Connect Wallet
        </Button>
      </div>
    </div>
  );
}

export default Header;
