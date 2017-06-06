"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//class decorator only works for constructor
function logged(constructorFn) {
    console.log(constructorFn);
}
var Person = (function () {
    function Person() {
        console.log("Hi");
    }
    ;
    Person.prototype.hehe = function () {
        console.log("hehe");
    };
    return Person;
}());
Person = __decorate([
    logged
], Person);
//Factory
function logging(value) {
    return value ? logged : null;
}
// test snippet
function loggtest(value) {
    return function (constructor) {
        console.log(constructor);
    };
}
var Car = (function () {
    function Car() {
    }
    return Car;
}());
Car = __decorate([
    logging(false)
], Car);
var People = (function () {
    function People() {
    }
    return People;
}());
People = __decorate([
    loggtest()
], People);
//Advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Plant = (function () {
    function Plant() {
        this.name = 'Green Plant';
    }
    Plant.prototype.hehe = function () {
        this.print();
    };
    return Plant;
}());
Plant = __decorate([
    logging(true),
    printable
], Plant);
new Plant().hehe();
// Method decorator
function editable(value) {
    // target 可添加成员但不能重写, descriptor.value可以重写
    return function (target, propName, descriptor) {
        descriptor.writable = value;
        console.log(target, descriptor);
    };
}
function methodTest(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
// property decorator
function overwritable(value) {
    return function (target, propName) {
        var descriptor = {
            writable: value
        };
        return descriptor;
    };
}
var Project = (function () {
    function Project(name) {
        this.projectName = name;
    }
    ;
    // @editable(false)
    Project.prototype.calBudget = function () {
        console.log(1000);
    };
    return Project;
}());
__decorate([
    overwritable(true)
], Project.prototype, "projectName", void 0);
__decorate([
    methodTest(true)
], Project.prototype, "calBudget", null);
var project = new Project('Super Project');
project.calBudget();
project.calBudget = function () {
    console.log("2000");
};
project.calBudget();
// Parameter Decorator
function printInfo(target, methodName, paramIndex) {
    console.log("Target: " + target);
    console.log("methodName: " + methodName);
    console.log("paramIndex: " + paramIndex);
}
var Course = (function () {
    function Course(name) {
        this.name = name;
    }
    ;
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log("10000");
        }
        else {
            console.log("2000");
        }
    };
    return Course;
}());
__decorate([
    __param(1, printInfo)
], Course.prototype, "printStudentNumbers", null);
var course = new Course('super course');
course.printStudentNumbers('anything', true);
course.printStudentNumbers('anything', false);
