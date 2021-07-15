import React from "react";
import { ThemeConsumer } from "styled-components";
import Brightness7Icon from "@material-ui/icons/Brightness7";

export default function ToggleMode() {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Brightness7Icon
          variant="primary"
          onClick={(e) =>
            theme.setTheme(
              theme.mode === "dark"
                ? { ...theme, mode: "light" }
                : { ...theme, mode: "dark" }
            )
          }
        >
          Toggle Mode
        </Brightness7Icon>
      )}
    </ThemeConsumer>
  );
}
