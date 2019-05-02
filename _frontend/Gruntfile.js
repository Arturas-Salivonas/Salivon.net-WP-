module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        browserify: {
            dist: {
                files: {
                    // destination for transpiled js : source js
                    '../js/not_in_use/compiled.js': 'js/scripts.js'
                },
                options: {
                    transform: [['babelify', { presets: ["es2015"] }]],
                    browserifyOptions: {
                        debug: true
                    }
                }
            }
        },

        uglify: {
            options: {
            banner: '/*! Grunt Uglify <%= grunt.template.today("yyyy-mm-dd") %> */ '
            },
            build: {
            src: '../js/not_in_use/compiled.js',
            dest: '../js/scripts.min.js'
            }
        },

      cssmin: {
        options: {
          mergeIntoShorthands: false,
          roundingPrecision: -1
        },
        target: {
          files: [{
            src: ['../style-compiled.css'],
            dest: '../style.css'
          }]
        }
      },
		
		sass: {
			dist: {
			  options: {
				style: 'expanded'
			  },
			  files: {
				'../style-compiled.css': './sass/main.scss'
			  }
			}
		  },
		  
		  
		watch: {
		  scripts: {
			files: ['**/*.js'],
			tasks: ['browserify:dist'],
			options: {
			  spawn: false,
			},
		  },
		  css: {
			files: [ '**/*.scss'],
			tasks: ['sass'],
			options: {
			  spawn: false,
			},
		  }
		}

    });
  
    // Load the plugins. Sass requires you to have Ruby and Sass installed: https://github.com/gruntjs/grunt-contrib-sass
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    
    
  
    // Default task(s).
    grunt.registerTask('default', [
    'browserify:dist',
  'sass',
  'cssmin',
  'uglify'
    ]);
	
	grunt.registerTask('build', [
    'browserify:dist',
    'uglify:build',
	'sass'
    ]);
	
	grunt.registerTask('sass-compile', [
	'sass'
    ]);
	
	grunt.registerTask('js', [
    'browserify:dist'
    ]);
	
	
	grunt.registerTask('watch', [
	'watch'
    ]);
  
  };