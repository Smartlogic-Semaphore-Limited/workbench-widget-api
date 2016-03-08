module.exports = function (grunt) {

  var karmaPort = grunt.option('karmaPort') || 9876;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    info: {
      banner: "/****\n" +
      " * swWidget\n" +
      " * https://github.com/smatrlogic/swWidget\n" +
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
        banner: '<%= info.banner %>',
      },
      dist: {
        src: ['bower_components/q/q.js', 'lib/*.js', 'src/*.js'],
        dest: 'dist/workbench-widget-api.min.js'
      }
    },
    jsdoc: {
      dist: {
        src: ['src/workbench-widget-api.js', 'test/*.js'],
        options: {
          destination: 'doc'
        }
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
        dest: 'example/'
      },
    },
    clean: {
      build:['dist/', 'doc/']
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean', 'uglify', 'jsdoc', 'copy', 'karma']);

}