import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(dropdown|menu|divider|popover|button|ripple|spinner).js"
  ],
  theme: {
    extend: {
       fontFamily: {
        sans: ['Inter', 'sans-serif'], // Default Tailwind sans font will use Inter
      },
      colors: {
        element: '#32ABF2',
        main_text: '#134267',
        secondary_text: '#4F637D',
        navmap_secondary: '#5D7FA3',
        navmap_element: '#96CAF7',
        navmap_focused: '#134267'
      },
      boxShadow: {
        'form': '0 5px 20px 0px rgba(108, 117, 139, 0.2)',
      }
    },
  },
  plugins: [nextui()],
};
export default config;
