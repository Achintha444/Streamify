import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "./constants/constants";

export const isScreenMobileOrSmall = () =>
    window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;

export const isTabletOrSmaller = () =>
    window.matchMedia(`(max-width: ${TABLET_BREAKPOINT}px)`).matches;
