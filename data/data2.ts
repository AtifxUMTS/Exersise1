let num1: number = 3

let num2:  number = 6


interface Student {
    name: string;
    age: number;
    grade: number
}

const students: Student[] = [
    {
        name: "Atif",
        age: 18,
        grade: 12,
    },
    {
        name: "Bob",
        age: 18,
        grade: 10,
    },
    // You can add more students object here
];

export {num1, num2, students}