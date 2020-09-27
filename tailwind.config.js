module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    screens: {
      'sm': { max: '699px' },
      'md': { min: '700px', max: '1023px'},
      'lg': { min: '1024px', max: '1439px'},
      'xl': { min: '1440px' },
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
