
var fullName = 'John Doe';
var obj = {
 fullName: 'Colin Ihrig',
 prop: {
 fullName: 'Aurelio De Rosa',
 getFullName: function () {
 return this.fullName;
 }
 }
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test);

1. this refers to local property of the obj prop
2. this refers to global var;
