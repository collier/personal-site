// Detault Tailwind Config (https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js)

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        about: '20% auto',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      // -- Remove wider breakpoints
      // lg: '1024px',
      // xl: '1280px',
      // 2xl: '1536px',
    },
    /**
     * Fallback fonts copied from tailwind defaults: https://tailwindcss.com/docs/font-family
     * Other fonts to considered:
     * - "Source Sans Pro" (sans-serif)
     * - Lora (sans-serif)
     **/
    //
    fontFamily: {
      sans:
        'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif:
        'Rosario, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    },
  },
  plugins: [],
};
