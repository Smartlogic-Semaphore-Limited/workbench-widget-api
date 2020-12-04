module.exports = function (grunt) {
  var karmaPort = grunt.option("karmaPort") || 9876;

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    karma: {
      unit: {
        configFile: "karma-unit.conf.cjs",
        singleRun: true,
        port: karmaPort,
      },
    },
    copy: {
      main: {
        expand: true,
        cwd: "lib",
        src: "workbench-widget-api.min.js",
        dest: "examples_src/",
      },
    },
    assets_inline: {
      options: {
        minify: true,
      },
      main: {
        files: {
          "examples_dist/widgetApiPresentation.html":
            "examples_src/widgetApiPresentation.html",
          "examples_dist/widgetWikipedia.html":
            "examples_src/widgetWikipedia.html",
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-karma");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-assets-inline");

  grunt.registerTask("build-examples", ["copy", "assets_inline"]);
};
