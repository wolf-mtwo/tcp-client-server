'use strict'

module.exports = (grunt) ->

  # coffeeLintRules = require './coffeelint'
  PATTERN_LOAD_TASK =
    pattern: 'grunt-*'
    scope: 'devDependencies'

  (require 'load-grunt-tasks')(grunt, PATTERN_LOAD_TASK)

  # configure the tasks
  grunt.initConfig

    nodemon:
      client:
        script: 'client/app.js'
        options:
          ignore: ['public/**', 'node_modules/**']
          watch: ['client', 'common']
          ext: 'js,html'
          delayTime: 1
          cwd: __dirname
      server:
        script: 'server/app.js'
        options:
          ignore: ['public/**', 'node_modules/**']
          watch: ['server', 'common']
          ext: 'js,html'
          delayTime: 1
          cwd: __dirname

    # Concurrent tasks
    concurrent:
      client:
        tasks: ['nodemon:client']
        options:
          logConcurrentOutput: true
      server:
        tasks: ['nodemon:server']
        options:
          logConcurrentOutput: true

  #Create task to server Up.
  grunt.registerTask 'dev', 'Compile then start a connect web server', (target) ->

    server = grunt.option 'server'
    if server
      grunt.task.run [
        'concurrent:server'
      ]

    client = grunt.option 'client'
    if client
      grunt.task.run [
        'concurrent:client'
      ]

    if not server and not client
      console.log 'Use folliwing options'
      console.log 'grunt dev --server'
      console.log 'grunt dev --client'
      throw new Error 'oh!'
