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
    },
    copy: {
      options: {
        timestamp: true
      },
      dist: {
        expand: true,
        cwd: 'lib/',
        src: ['**/*', '!**/*.js','!**/*.less'],
        dest: 'dist/',
        filter: 'isFile'
      }
    },
    clean: ['dist']
    
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['less','copy']);
};
