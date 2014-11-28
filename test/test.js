'use strict'

var gauss = require('../sample')
var tape = require('tape')

var N = 1e6

tape('gauss rand', function(t) {
  var moment1 = 0.0
  var moment2 = 0.0
  for(var i=0; i<N; ++i) {
    var x = gauss()
    moment1 += x
    moment2 += x * x
  }

  var avg = moment1 / N
  var std = moment2 / N - avg*avg

  t.ok(Math.abs(avg) < 0.01, 'average')
  t.ok(Math.abs(std-1.0) < 0.01, 'stddev')

  t.end()
})