module.exports = function (grunt) {

  grunt.initConfig({
    
    lessFiles: [
      'lib/styles/main.less'
    ],

    pkg: grunt.file.readJSON('package.json'),

    less: {
      production: {
        paths : [
          "lib/components/patternfly/fonts"
        ],
        src: '<%= lessFiles %>',
        expand: true,
        ext: '.css',
        options: {
          sourceMap: false
        }
      }
    }
    
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', 'less');
};
