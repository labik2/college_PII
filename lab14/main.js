const Car = {
  startEngine: function() {
    console.log(`${this.brand} ${this.model} заводить двигун.`);
  },
  stopEngine: function() {
    console.log(`${this.brand} ${this.model} вимикає двигун.`);
  }
};
const myCar = Object.create(Car);
myCar.brand = "Mercedes";
myCar.model = "Bmw";
const anotherCar = Object.create(Car);
anotherCar.brand = "Mazda";
anotherCar.model = "Porshe";
console.log("Прототип об'єкта myCar:", Object.getPrototypeOf(myCar));


const PersonProto = {
  init: function(name) {
    this.name = name;
  },
  getInfo: function() {
    return `Ім'я: ${this.name}`;
  }
};

const CourseProto = {
  init: function(name) {
    this.name = name;
    this.students = [];
  },
  addStudent: function(student) {
    this.students.push(student)
  }
};

const TeacherProto = Object.create(PersonProto);
TeacherProto.initTeacher = function(name) {
  this.init(name);
  this.courses = [];
};
TeacherProto.addCourse = function(course) {
  this.courses.push(course);
  
};

const StudentProto = Object.create(PersonProto);
StudentProto.initStudent = function(name) {
  this.init(name);
  this.courses = [];
};
StudentProto.enrollCourse = function(course) {
  this.courses.push(course);
  course.addStudent(this);
};
StudentProto.viewCourses = function() {
  if (this.courses.length > 0) {
    return `${this.name} навчається на курсах: ${this.courses.map(course => `"${course.name}"`).join(', ')}.`;
  } else {
    return `${this.name} не записаний на жоден курс.`;
  }
};

console.log("\n--- Завдання 2: Об'єктна модель управління курсами ---");

const teacher1 = Object.create(TeacherProto);
teacher1.initTeacher("Семен Довженко");

const student1 = Object.create(StudentProto);
student1.initStudent("Дмитро Рибалка");

const student2 = Object.create(StudentProto);
student2.initStudent("Борис Аркадів");

const course1 = Object.create(CourseProto);
course1.init("Основи верстки");

const course2 = Object.create(CourseProto);
course2.init("Основи операційної системи");

teacher1.addCourse(course1);
teacher1.addCourse(course2);

student1.enrollCourse(course1);
student1.enrollCourse(course2);
student2.enrollCourse(course1);

document.addEventListener('DOMContentLoaded', function() {
  const outputDiv = document.getElementById('output');
  if (outputDiv) {
    outputDiv.innerHTML += `<h2>Завдання 2: Об'єктна модель управління курсами</h2>`;
    outputDiv.innerHTML += `<p>${teacher1.getInfo()}</p>`;
    outputDiv.innerHTML += `<p>${student1.getInfo()}</p>`;
    outputDiv.innerHTML += `<p>${teacher1.name} веде курси: ${teacher1.courses.map(c => `"${c.name}"`).join(', ')}</p>`;
    outputDiv.innerHTML += `<p>${student1.viewCourses()}</p>`;
    outputDiv.innerHTML += `<p>${student2.viewCourses()}</p>`;
    outputDiv.innerHTML += `<p>Студенти курсу "${course1.name}": ${course1.students.map(s => s.name).join(', ')}</p>`;
    outputDiv.innerHTML += `<p>Студенти курсу "${course2.name}": ${course2.students.map(s => s.name).join(', ')}</p>`;
  }
});
