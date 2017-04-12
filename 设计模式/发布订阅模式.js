//发布订阅模式
var Event = (function () {
    var events = {}
    function on(event, todo) {
        events[event] = events[event] || [];
        events[event].push({
            todo: todo
        });
    }
    function use(event, args) {
        if (!events[event]) {
            return;
        }
        for (var i = 0; i < events[event].length; i++) {
            events[event][i].todo(args);
        }
    }
    function off(event) {
        events[event] = [];
    }
    return {
        on: on,
        use: use,
        off: off
    }
})();
Event.on('a', function (data) { console.log(data) })
Event.use('a', '你好')
Event.off('a')
