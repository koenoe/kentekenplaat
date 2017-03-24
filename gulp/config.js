const ports = {
  browser: 3000,
  ui: 3001,
};

const directories = {
  src: './src',
  build: './dist',
  demo: './docs',
};

const files = {
  scss: [
    `${directories.src}/scss/*.scss`,
  ],
  js: [
    `${directories.src}/js/*.js`,
  ],
  vector: [
    `${directories.src}/img/*.svg`,
  ],
  fonts: [
    `${directories.src}/fonts/*.*`,
  ],
};

const config = {
  directories,
  files,
  ports,
};

export default config;
