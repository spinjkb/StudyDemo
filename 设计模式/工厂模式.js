function createPerson(opts) {
    var person = {
        name: opts.name || 'jinkbibo'
    };
    person.sayName = function () {
        console.log(this.name);
    }
    return person;
}
var p1 = createPerson({ name: 'jkb' });
var p2 = createPerson({ name: '123' });