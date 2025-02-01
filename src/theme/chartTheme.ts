import { defaults } from "chart.js";
import { ThemeColors } from "./themeColors";
import { ThemeFonts } from "./themeFonts";

defaults.font.family = ThemeFonts.defaultFontFamily;
defaults.font.size = 14;
defaults.color = ThemeColors.colorTextSecondary;
