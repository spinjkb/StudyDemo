var People = (function () {
    var instance;
    function init() {
        return {};
    }
    return {
        createPeople: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
} ());
var obj1 = People.createPeople();
var obj2 = People.createPeople();