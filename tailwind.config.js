// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'black-hole': 'black-hole-animation 1s ease-in-out',
      },
      keyframes: {
        'black-hole-animation': {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(0)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};

// tailwind.config.js
