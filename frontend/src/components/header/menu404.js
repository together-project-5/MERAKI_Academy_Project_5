import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import "./header.css";

export default function PrimarySearchAppBarErr() {

  const history = useHistory();

  const handleClick = (e) => {
    history.push("/together");
  };

  return (
    <div className="MuiToolbar-regular">
      <AppBar position="static">
        <Toolbar>
          <Typography
            onClick={handleClick}
            className="websiteName"
            variant="h6"
            noWrap
          >
            Together
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
