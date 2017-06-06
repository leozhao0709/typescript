//class decorator only works for constructor
function logged(constructorFn: Function) {
  console.log(constructorFn);
}

@logged
class Person {
  constructor() {
    console.log(`Hi`);
  };

  hehe() {
    console.log(`hehe`);
  }
}

//Factory
function logging(value: boolean): any {
  return value ? logged : null;
}

// test snippet
function loggtest(value?: boolean) {
  return function (constructor: Function) {
    console.log(constructor);
  }
}

@logging(false)
class Car {

}

@loggtest()
class People {

}

//Advanced
function printable(constructorFn: Function) {
  constructorFn.prototype.print = function () {
    console.log(this);
  }
}

@logging(true)
@printable
class Plant {
  name = 'Green Plant'

  hehe() {
    (<any>this).print();
  }
}

new Plant().hehe();

// Method decorator
function editable(value: boolean) {
  // target 可添加成员但不能重写, descriptor.value可以重写
  return function (target: any, propName: string, descriptor: PropertyDescriptor) {
    descriptor.writable = value;
    console.log(target, descriptor);
  }
}

function methodTest(value?: boolean) {
  return function (target: any, propName: string, descriptor: PropertyDescriptor) {
    descriptor.writable = value;
  }
}

// property decorator
function overwritable(value?: boolean) {
  return function (target: any, propName: string): any {
    const descriptor: PropertyDescriptor = {
      writable: value
    }
    return descriptor;
  }
}

class Project {
  @overwritable(true)
  projectName: string;

  constructor(name: string) {
    this.projectName = name;
  };

  // @editable(false)
  @methodTest(true)
  calBudget() {
    console.log(1000);
  }
}

const project = new Project('Super Project');
project.calBudget();
project.calBudget = () => {
  console.log(`2000`);
}
project.calBudget();

// Parameter Decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log(`Target: ${target}`);
  console.log(`methodName: ${methodName}`);
  console.log(`paramIndex: ${paramIndex}`);
}

class Course {
  name: string;

  constructor(name: string) {
    this.name = name;
  };

  printStudentNumbers(mode: string, @printInfo printAll: boolean) {
    if (printAll) {
      console.log(`10000`);
    } else {
      console.log(`2000`);
    }
  }
}

const course = new Course('super course');
course.printStudentNumbers('anything', true);
course.printStudentNumbers('anything', false);
