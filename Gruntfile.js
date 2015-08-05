module.exports = function(grunt) {
  // time
  require('time-grunt')(grunt);
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

// --------------------------------------
// Sass Configuration
// --------------------------------------

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed',
          sourceMap: true,
        },
        files: {
          'dist/css/app.css': 'src/scss/app.scss'
        },
      },
    },

// --------------------------------------
// Concatenate Configuration
// --------------------------------------

    concat: {
    	options: {
    		separator: ';'
    	},
    	script: {
    		src: [
    			'bower_components/foundation/js/foundation/foundation.js',
    			'bower_components/foundation/js/foundation/foundation.topbar.js',
    			'bower_components/foundation/js/foundation/foundation.abide.js',
    			'src/js/main.js',
    		],
    		dest: 'dist/js/main.js',
    	},
    	modernizr: {
    		src: [
    			'bower_components/modernizr/modernizr.js',
    			'src/js/custom.modernizr.js',
    		],
    		dest: 'dist/js/modernizr.js',
    	},
    },

    // --------------------------------------
    // Uglify Configuration
    // --------------------------------------

    uglify: {
    	dist: {
    		files: {
    			'dist/js/jquery.min.js': ['bower_components/jquery/dist/jquery.js'],
    			'dist/js/modernizr.min.js': ['dist/js/modernizr.js'],
    			'dist/js/main.min.js': ['dist/js/main.js']
    		},
    	},
    },

    watch: {
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },

      sass: {
        files: 'src/scss/**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
          livereloadOnError: false,
        },
      },

      js: {
        files: 'src/js/**/*.js',
        tasks: ['concat','uglify'],
        options: {
          livereload: true,
        },
      },

      php: {
        files: '**/*.php',
        options: {
          livereload: true,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('build', ['sass', 'concat', 'uglify']);
  grunt.registerTask('default', ['build','watch']);
}
