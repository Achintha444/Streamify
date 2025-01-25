import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "./constants/constants";

/**
 * @returns true if screen is mobile or small (screen size less than 468px)
 */
export const isScreenMobileOrSmall = () =>
    window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;

/**
 * @returns true if screen is tablet or smaller (screen size less than 768px)
 */
export const isScreenTabletOrSmaller = () =>
    window.matchMedia(`(max-width: ${TABLET_BREAKPOINT}px)`).matches;

/**
 * Add leading zeros to a number with a single digit
 */
export const addLeadingZero = (number: string): string =>
    number.toString().padStart(2, "0");
