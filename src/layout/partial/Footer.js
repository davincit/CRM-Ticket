import { Typography } from "@material-ui/core";
import CopyrightIcon from "@material-ui/icons/Copyright";

import React from "react";

export const Footer = () => {
  return (
    <div>
      <Typography style={{ textAlign: "center" }} color="inherit">
        <CopyrightIcon /> CRM All rights reserved.
      </Typography>
    </div>
  );
};
