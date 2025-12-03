export type ColorSet = {
    bg: string;
    bg_header: string;
    text: string;
};

export type Theme = {
    name: "light" | "dark";
    colors: ColorSet;
};

export const lightTheme: Theme = {
    name: "light",
    colors: {
        bg: "#f3f3f3", 
        bg_header: "#ffffff",
        text: "#313037"
    }
};

export const darkTheme: Theme = {
    name: "dark",
    colors: {
        bg: "#313037", 
        bg_header: "#ffffff1a",
        text: "#ffffff"
    }
};