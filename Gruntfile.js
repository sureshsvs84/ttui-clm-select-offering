
module.exports = function (grunt) {
    "use strict";
    var moduleFilePrefix = 'ttui-clm-';
    var moduleName ='fxl-select-offering';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        html: {
            index: 'src/'+moduleName+'/index.html',
            indexCtrl:'src/'+moduleName+'/indexCtrl.js',
            directive:'src/'+moduleName+'/directive/'+moduleName+'.tpl.html'
          
        },
        applicationJs: {
            app: 'src/'+moduleName+'/app.js',
            controller: 'src/'+moduleName+'/controller/'+moduleName+'-ctrl.js',
            directive: 'src/'+moduleName+'/directive/'+moduleName+'-directive.js',
            services: 'src/'+moduleName+'/services/'+moduleName+'-services.js' 
        },
        
        
        // Cleanup, remove files and folders not needed after cleanup:
        clean: {
            build: {
                files: [{
                    src: ['dist/'], //distribution

                }]

            }
           
        },

     
        // It converting minify and Unminify css and JS Path and moving All HTML File in Dist Folder: 
        processhtml: {
            dev: {
                options: {
                    data: {
                        message: 'This is development environment'
                    }
                },
                files: {
                    'dist/index.html': '<%= html.index %>',
                    'dist/directive/fxl-select-offering.tpl.html':'<%= html.directive %>'
                  
                }
            }
            
        },
        // compile scss stylesheets to css -----------------------------------------
        // Sass configuration:
        sass: {
            dev: {
                files: [{
                    expand: true,
                    cwd: 'src/'+moduleName+'/scss',
                    src: ['*.scss'],
                    dest: 'dist/css',
                    ext: '.css'
      }]
            }
        },
     
        //Concat Multiple js/ Css files to concatenate
        concat: {
            		options: {
					banner:
						'/* commonjs package manager support (eg componentjs) */\n' +
						'if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){\n' +
						'	module.exports = \'@@@@__SOURCE_FILENAME__\';\n' +
						'}\n\n' +
						'(function (window, angular, undefined) {\n' +
						'	"use strict";\n\n',

					footer:
						'\n'+
						'return angular;\n'+
						'})(window, window.angular);',

					sourceMap: false, // uglify does this

					process: function(src, filepath) {
						return '\n// Source: ' + filepath + '\n' + src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
					}
				},
            dev: {
                files: {                
                    //login page script file
                    'dist/js/fxl-select-offering.js': [
                                         '<%= applicationJs.app %>',
                                         '<%= applicationJs.controller %>',
                                         '<%= applicationJs.directive %>',
                                         '<%= applicationJs.services %>'
                                          ]

                }

            }

        },
        // copying all source file into dist file.
        copy: {
          
        
//            allFiles: {
//                expand: true,
//                cwd: 'src/fxl-select-offering',
//                src: ['**'],
//                dest: 'dist'
//            },
            images: {
                expand: true,
                cwd: 'src/fxl-select-offering/images',
                src: ['**'],
                dest: 'dist/images'
            }
     
        },


    });

    
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-processhtml');

   
    // This task will only run the dev Environment configuration
    grunt.registerTask('build', ['clean', 'copy', 'processhtml', 'sass', 'concat']);
   

};
