module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust for your file structure
  ],
  theme: {
    extend: {
      animation: {
        'ripple-shock': 'rippleShockSlideIn 1s ease-in-out forwards',
      },
      keyframes: {
        rippleShockSlideIn: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%) scale(0.9)', // Start from the left and slightly smaller
          },
          '50%': {
            opacity: '1',
            transform: 'translateX(0) scale(1)', // Slide into position and grow to normal size
          },
          '100%': {
            opacity: '1', // Ensure text stays fully visible
            transform: 'translateX(0) scale(1)', // Remain in normal position and size
          },
        },
      },
    },
  },
  plugins: [],
}
