module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['.'],
        extensions: ['.tsx', '.jsx', '.js', '.json', '.ts'],
        alias: {
          '@components': './@components',
        },
      },
    ],
  ],
};
