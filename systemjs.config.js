/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      //'angular-file-saver' : 'npm:angular-file-saver/dist/angular-file-saver.bundle.min.js',  
      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'file-saver':'npm:file-saver/file-saver.min.js',
      'ng2-file-upload' : 'npm:ng2-file-upload',
      'angular2-uuid': 'npm:angular2-uuid/index.js',
      'ng2-datepicker': 'npm:ng2-datepicker/bundle/ng2-datepicker.umd.js',
      //express  
      'express' : 'npm:express'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      /** Configuration for ng2-file-upload */
      'ng2-file-upload' : { 
        main: './ng2-file-upload.js',
        defaultExtension: 'js'
      },
      'express' : {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
