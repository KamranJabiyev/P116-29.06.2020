// let name="Ferid";
// let surname="Ehmedov";
// let age=23;


// let stu = {
//     id:1,
//     name: "Ferid",
//     surname: "Ehmedov",
//     age: 23,
//     "work place": "somewhere",
//     Info: function () {
//         return `${this.name} ${this.surname} ${this.age}`;
//     }
// }

// let stu1 = {
//     id:2,
//     name: "Orxan",
//     surname: "memmedli",
//     age: 30,
//     "work place": "somewhere",
//     Info: function () {
//         return `${this.name} ${this.surname} ${this.age}`;
//     }
// }

// let p116 = {
//     name: "P116",
//     count: 16,
//     students: [],
//     addStudent: function (student) {
//         if(this.students.length==this.count){
//             console.log("Qrup artiq doludur");
//             return;
//         }
//         if(this.students.find(s=>s.id==student.id)===undefined){
//             this.students.push(student);
//         }
//         else{
//            console.log(`${student.id} - idli obyekti artiq elave etmisiniz`)
//         }
//     },
//     AllStudent:function(){
//         this.students.forEach(s=>console.log(`${s.name} ${s.surname}`))
//     }
// }

// let p117 = {
//     name: "P117",
//     count: 17,
//     students: [],
//     addStudent: function (student) {
//         if(this.students.length==this.count){
//             console.log("Qrup artiq doludur");
//             return;
//         }
//         if(this.students.find(s=>s.id==student.id)===undefined){
//             this.students.push(student);
//         }
//         else{
//            console.log(`${student.id} - idli obyekti artiq elave etmisiniz`)
//         }

//     },
//     AllStudent:function(){
//         this.students.forEach(s=>console.log(`${s.name} ${s.surname}`))
//     }
// }

// p116.addStudent(stu1)
// p116.addStudent(stu)
// p116.addStudent(stu1)

// p116.AllStudent()
// class Person{}

// class Student extends Person {
//     constructor(id, name, surname) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//     }

//     Info = () => `${this.name} ${this.surname}`;

//     static Test=()=>console.log("Static method")
// }


// class Group {
//     constructor(name, count) {
//         this.name = name;
//         this.count = count;
//     }
//     students = [];

//     addStudent = (student) => {
//         if (this.students.length == this.count) {
//             console.log("Qrup artiq doludur");
//             return;
//         }
//         if (this.students.find(s => s.id == student.id) === undefined) {
//             this.students.push(student);
//         }
//         else {
//             console.log(`${student.id} - idli obyekti artiq elave etmisiniz`)
//         }
//     }

//     AllStudent = () => this.students.forEach(s => console.log(`${s.name} ${s.surname}`))
// }

// let p116 = new Group("P116", 16);
// let p117 = new Group("P117", 17);

// let s1 = new Student(1, "Elgun", "Quluzade");
// let s2 = new Student(2, "Elnur", "Qulamli");

// console.log(s2.Info());

// p116.addStudent(s1)
// p116.addStudent(s2)

// Student.Test();



// function Person(name, surname) {
//     this.name = name;
//     this.surname = surname;
//     let x=10;

//     this.Info = function () {
//         return `${this.name} ${this.surname} ${x}`
//     }
// }

// let p = new Person("Zaur", "Ferruxzade")

// console.log(p.Info())

// let arr=new Array(10,20,30);

// console.log(arr.length)

class CustomArray {
    constructor() {
        this.elements = arguments;
        this.Lenght = 0;
        for (let i = 0; i < Infinity; i++) {
            if (this.elements[i] == arguments[length - 1])
                break;
            this.Lenght++;
        }
    }

    Find(callback) {
        let result;
        for (const elem of this.elements) {
            if (callback(elem)) {
                result = elem;
                break;
            }
        }
        return result;
    }
}

let arr = new CustomArray(10, 20, 30, 40);
console.log(arr.Find(n => n > 10))








