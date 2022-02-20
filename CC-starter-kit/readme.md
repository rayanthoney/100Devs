1. Iniatialixe Node JS
   
    `npm init`

2. Install Gulp globally and locally

    `npm install -g gulp`
    
    `npm install --save-dev gulp`

3. Install plugins
    (coding in public demo uses)
    *SCSS convert, min, and autoprefixer*
    `npm install --save-dev gulp-sass gulp-autoprefixer gulp-clean-css`

    *js min*
    `npm install --save-dev gulp-terser`
    
    *img min and webp*
    `npm install --save-dev gulp-imagemin gulp-webp`


    (coder coder demo uses)
    *SCSS convert, postprocessor, postcss-plugin, js min, browserSync*
    `npm install --save-dev gulp-sass gulp-postcss cssnano gulp-terser browser-sync`