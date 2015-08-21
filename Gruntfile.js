module.exports = function(grunt) {
	var mozjpeg = require('imagemin-mozjpeg');

  grunt.initConfig({
	uglify: {
	  dist: {
        files: [{
            expand: true,
            cwd: 'js',
            src: '**/*.js',
            dest: 'dist/js'
        }
	  }]
	},

	htmlmin: {
		dist: {
		  options: {
			removeComments: true,
			collapseWhitespace: true
		  },
		  files: {
			'dist/index.html': 'index.html'
		  }
		}
	  },

	imagemin: {
	   dist: {
		  options: {
			optimizationLevel: 10
		  },
		  files: [{
			 expand: true,
			 cwd: 'index_assets',
			 src: ['**/*.{jpg,gif,svg}'],
			 dest: 'dist/index_assets'
		  }]
	   }
	},

	copy: {
	  main: {
		src: 'index.css',
		dest: 'dist/',
	  },
	},

	imageoptim: {
	  myTask: {
	  	options: {
	      imageAlpha: true,
	      quitAfter: true
	    },
		src: ['index_assets']
	  }
	},

	svgmin: {
        options: {
            plugins: [
                {
                    removeViewBox: false
                }, {
                    removeUselessStrokeAndFill: false
                }
            ]
        },
        dist: {
            files: [{
                expand: true,
                cwd: "index_assets",
                src: ["**/*.svg"],
                dest: "./dist/index_assets/"
            }]
        }
    },

	tinypng: {
		options: {
			apiKey: "5i0DI2Urlz4w5rzdG7kjKcXDt0DxHrz0",
			summarize: true,
			showProgress: true,
			stopOnImageError: true
		},
	    compress: {
	        expand: true,
	        cwd: "index_assets",
	        src: ["*.png"],
	        dest: 'dist/index_assets'
	    }
	  }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-imageoptim');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-tinypng');
  grunt.loadNpmTasks('grunt-svgmin');

  grunt.registerTask('default', ['htmlmin', 'uglify', 'copy', 'imageoptim', 'tinypng', 'imagemin', 'svgmin']);
  grunt.registerTask('images', ['imageoptim', 'tinypng', 'svgmin', 'imagemin']);
  grunt.registerTask('minify', ['htmlmin', 'uglify', 'copy']);

};
