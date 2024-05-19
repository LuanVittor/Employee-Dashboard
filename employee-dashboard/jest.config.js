module.exports = {
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx'],
  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.vue$': 'vue3-jest',
    '^.+\\.js$': 'babel-jest',
  },

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  transformIgnorePatterns: [
    '/node_modules/(?!axios)',
  ],

  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel'
};
  
