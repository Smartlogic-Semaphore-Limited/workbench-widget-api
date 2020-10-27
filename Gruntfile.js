module.exports = function (grunt) {

  var karmaPort = grunt.option('karmaPort') || 9876;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    info: {
      banner: "/****\n" +
      " * <%= pkg.name %>\n" +
      " * https://github.com/Smartlogic-Semaphore-Limited/workbench-widget-api\n" +
      " *\n" +
      " * @author <%= pkg.author %>\n" +
      " * @link <%= pkg.link %>\n" +
      " * @version <%= pkg.version %>\n" +
      " *\n" +
      " * Released under <%= pkg.licence %> License. See LICENSE.txt" +
      "*/\n\n"
    },
    uglify: {
      options: {
        banner: '<%= info.banner %>'
      },
      dist: {
        src: ["node_modules/q/q.js", "lib/*.js", "src/*.js"],
        dest: "dist/workbench-widget-api.min.js"
      }
    },
    jsdoc2md: {
      oneOutputFile: {
        src: 'src/*.js',
        dest: 'doc/ApiDocumentation.md'
      }
    },
    karma: {
      unit: {
        configFile: 'karma-unit.conf.js',
        singleRun: true,
        port: karmaPort
      }
    },
    copy: {
      main: {
        expand: true,
        cwd: 'dist',
        src: 'workbench-widget-api.min.js',
        dest: 'examples_src/'
      },
    },
    clean: {
      build:['dist/', 'examples_dist/']
    },
    assets_inline: {
      options: {
        minify: true
      },
      main: {
        files: {
          'examples_dist/widgetApiPresentation.html': 'examples_src/widgetApiPresentation.html',
          'examples_dist/widgetWikipedia.html': 'examples_src/widgetWikipedia.html'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-jsdoc-to-markdown');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-assets-inline');

  grunt.registerTask('default', ['clean', 'uglify', 'jsdoc2md', 'copy', 'assets_inline', 'karma']);

};