1. Iniatialize Node JS
   
          npm init

2. Install Gulp globally and globally

         npm install -g gulp

3. Install Gulp globally and locally         
    
          npm install --save-dev gulp

4. Install plugins
 
      (Coding in Public demo uses)

    *SCSS convert, min, and autoprefixer*
    
         npm install --save-dev sass gulp-sass gulp-autoprefixer gulp-clean-css

    *js min*
    
         npm install --save-dev gulp-terser
    
    *img min and webp*
    
          npm install --save-dev gulp-imagemin gulp-webp


      (Coder Coder demo uses)
    
    *SCSS convert, postprocessor, postcss-plugin, js min, browserSync*
    
          npm install --save-dev sass gulp-sass gulp-postcss cssnano gulp-terser browser-sync
