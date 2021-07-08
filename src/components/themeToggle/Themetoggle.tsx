import React, { useContext } from "react";
import { Context } from "../../context/store";
import { HiSun } from "react-icons/hi";
import { WiMoonAltWaningGibbous3, WiMoonAltWaxingCrescent1 } from "react-icons/wi";
const Themetoggle = () => {
  const { setTheme, theme } = useContext(Context);

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <div className={`themeToggle ${theme}`} onClick={toggleTheme}>
      {theme === "dark" ? <HiSun /> : <WiMoonAltWaxingCrescent1 />}
    </div>
  );
};

export default Themetoggle;
