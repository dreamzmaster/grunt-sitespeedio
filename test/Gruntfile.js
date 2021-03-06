'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    sitespeedio: {
      default: {
        options: {
          urls: ['https://www.sitespeed.io', 'https://www.sitespeed.io/documentation/'],
          browsertime: {
            browser: 'chrome',
            connectivity: 'native',
            iterations: 5,
          },
          budget: {
            config: {
              "browsertime.pageSummary": [{
                "metric": "statistics.timings.firstPaint.median",
                "max": 1000,
                "unit": "ms"
              }, {
                "metric": "statistics.visualMetrics.FirstVisualChange.median",
                "max": 1000,
                "unit": "ms"
              }],
              "coach.pageSummary": [{
                "metric": "advice.performance.score",
                "min": 75,
                "unit": "percentage"
              }, {
                "metric": "advice.info.domElements",
                "max": 200
              }, {
                "metric": "advice.info.domDepth.max",
                "max": 10
              }, {
                "metric": "advice.info.iframes",
                "max": 0
              }, {
                "metric": "advice.info.pageCookies.max",
                "max": 5
              }],
              "pagexray.pageSummary": [{
                "metric": "transferSize",
                "max": 100000,
                "unit": "bytes"
              }, {
                "metric": "requests",
                "max": 20
              }, {
                "metric": "missingCompression",
                "max": 0
              }, {
                "metric": "contentTypes.css.requests",
                "max": 1
              }, {
                "metric": "contentTypes.image.transferSize",
                "max": 100000,
                "unit": "bytes"
              }, {
                "metric": "documentRedirects",
                "max": 0
              }]
            }
          }
        }
      }
    }
  });

  grunt.loadTasks('../tasks/');
  grunt.registerTask('default', ['sitespeedio']);

};
