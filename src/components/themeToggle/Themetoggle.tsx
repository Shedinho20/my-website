import React, { useContext } from "react";
import { Context } from "../../context/store";
import { HiSun } from "react-icons/hi";
import { WiMoonAltWaxingCrescent1 } from "react-icons/wi";
const Themetoggle = () => {
  const { setTheme, theme, saveTheme } = useContext(Context);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      saveTheme("light");
    } else {
      setTheme("dark");
      saveTheme("dark");
    }
  };

  return (
    <div className={`themeToggle ${theme}`} onClick={toggleTheme}>
      {theme === "dark" ? <HiSun /> : <WiMoonAltWaxingCrescent1 />}
    </div>
  );
};

export default Themetoggle;
