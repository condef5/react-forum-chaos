/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function Logout() {
  localStorage.getItem("user");
  localStorage.removeItem("user");
  console.log(localStorage);
  // redirect /home

  return <div>Logout</div>;
}

export default Logout;
