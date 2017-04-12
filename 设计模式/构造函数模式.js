function Person(name, age){
  this.name = name;
  this.age = age;
}
Person.prototype.sayName = function(){
  return this.name + this.age;
};
var student = new Person("jkb", 21);
console.log(student.sayName());
