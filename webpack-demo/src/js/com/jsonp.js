var WaterFall = require('./waterfall')
var jsonp = (function () {
    function Jsonp($ct) {
        this.$ct = $ct;
        this.perPageCount = 8;
        this.curPage = 1;
        this.load();
    }
    Jsonp.prototype.load = function () {
        var _this = this;
        $.ajax({
            url: 'https://platform.sina.com.cn/slide/album_tech',
            type: 'get',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            data: {
                app_key: '1271687855',
                num: _this.perPageCount,
                page: _this.curPage
            }
        }).done(function (ret) {
            if (ret && ret.status.code === "0") {
                
                _this.renderData(ret.data);
                
                _this.curPage++;
            } else {
                console.log('获取数据失败!')
            }
        })
    }
    Jsonp.prototype.renderData = function (data) {
        var _this = this;
        var tpl = '';
        for (var i = 0; i < data.length; i++) {
            tpl += '<li>'
                + '<a href="' + data[i].url + '" class="link">'
                + '<img src="' + data[i].img_url + '" alt=""' + '>'
                + '</a>'
                + '<h4>' + data[i].short_name + '</h4>'
                + '<p>' + data[i].short_intro + '</p>'
                + '</li>'
        }
        _this.$ct.append($(tpl));
        _this.$ct.find('img').on('load', function () {
            WaterFall.init($('.waterfall-ct'));
        })
    }
    return {
        init: function ($ct) {
            new Jsonp($ct);
        }
    }
})()

module.exports = jsonp
