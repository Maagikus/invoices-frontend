import { useState, useEffect } from "react";
import {
  SCREEN_SMAL_MOBILE,
  SCREEN_SM,
  SCREEN_MD,
  SCREEN_MMD,
  SCREEN_LG,
  SCREEN_XL,
  SCREEN_XXL,
} from "../utils/breakpoints";

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    isScreenSmalMobile: width <= SCREEN_SMAL_MOBILE,
    isScreenSm: width >= SCREEN_SM,
    isScreenMd: width >= SCREEN_MD,
    isScreenMmd: width <= SCREEN_MMD,
    isScreenLg: width >= SCREEN_LG,
    isScreenXl: width >= SCREEN_XL,
    isScreenXxl: width >= SCREEN_XXL,
  };
};
