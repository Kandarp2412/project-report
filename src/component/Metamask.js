import React, { useState } from "react";
import { Button } from "@material-ui/core";

function Metamask() {
  let ethereum = window.ethereum;
  const [addr, setAddr] = useState("");

  const handleClick = () => {
    ethereum.request({ method: "eth_requestAccounts" });
    console.log(ethereum);
    setAddr(ethereum.selectedAddress);
  };

  ethereum.on("accountsChanged", function (accounts) {
    // Time to reload your interface with accounts[0]!
    setAddr(accounts[0]);
    console.log(addr);
  });

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        style={{
          marginTop: "100px",
        }}
        onClick={(e) => handleClick(e)}
      >
        Click me
      </Button>
      <br />
      <div style={{ marginLeft: "10px", marginRight: "10px" }}>
        {ethereum && <p>Your Ethereum Address: {addr}</p>}
      </div>
      {!ethereum && (
        <p style={{ color: "red" }}>
          Please install metamask extention for your browser
        </p>
      )}
    </div>
  );
}

export default Metamask;
