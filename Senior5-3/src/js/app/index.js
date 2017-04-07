
var $ = require('jquery');
var carousel = require('../com/carousel');
var gotop = require('../com/gotop');
var waterfall = require('../com/waterfall');
var Jsonp = require('../com//jsonp');



carousel.init($('.box'));
gotop.init($('body'), $('body'), 200);
Jsonp.init($('.waterfall-ct'));
$('.loadmore').on('click', function () {
    //因为每次都新new了一个curPage就不会递增
    Jsonp.init($('.waterfall-ct'));
    // jsonp;
})

//  lazyload.load($('img'), function($target){ 
//     if($target.attr('data-src')) {
//        var imgUrl = $target.attr('data-src');
//        $target.attr('src', imgUrl);
//        $target[0].classList.add('load');
//     }
// });

//  gotop.go($('body'));

//  threeDim.threeD($('.album'));

//  waterfall.flow($('.wrap'));
