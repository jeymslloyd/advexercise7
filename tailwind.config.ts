import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'home-background' : "url('https://static.vecteezy.com/system/resources/previews/034/438/727/non_2x/empty-modern-interior-dark-office-wall-background-front-view-ai-generated-free-photo.jpg')",
          'login-background':"url('https://images4.alphacoders.com/563/563004.jpg')",
          'profile-background':"url('https://wallpapers.com/images/hd/dark-background-pgrsi8zkztf8myiz.jpg')",


      },  
      colors: {
        'custom-blue': '#1877f2',
        'bg-color': '#f0f2f5',
        'green-btn': '#42b72a',
        'background': '#153448',
        'box-color' : 'DFD0B8',
        'custom-btn' : '3C5B6F',
       
      
      },

    },
  },
  plugins: [],
};
export default config;
