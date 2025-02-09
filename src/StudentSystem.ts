// 🏫 Create a Student Management System where students can be added, marked as passed/failed, and checked for status.
// 1. Create a union literal type called StudentStatus that can be "active", "graduated", or "dropped".
// 2. Create a type alias called Student which contains: studentId (number), name (string), age (number), subjects (string[]), status (StudentStatus).
// 3. Create a function called addStudent which will add a student to the students array. The function needs to return a Student object.
// 4. Create a function called updateStatus which updates a student's status. The return needs to be a string.
// 5. Create a function called addSubject which adds a subject to a student’s subjects array. The return needs to be a string.
// 6. Create a function called getStudent which returns a student’s information based on studentId.

type StudentStatus = "active" | "graduated" | "dropped";

type Student = {
  studentId: number;
  name: string;
  age: number;
  subjects: string[];
  status: StudentStatus;
};

var students: Student[] = [];

function addStudent(studentId: number, name: string, age: number, subjects: string[], status: StudentStatus): Student {
  var student: Student = { studentId: studentId, name: name, age: age, subjects: subjects, status: status };
  students.push(student);
  return student;
}

function updateStatus(studentId: number, status: StudentStatus): string {
  var student = findStudent(studentId);
  if (student) {
    student.status = status;
    return student.name + " has " + status;
  }
  return "Student not found";
}

function addSubject(studentId: number, subject: string): string {
  var student = findStudent(studentId);
  if (student) {
    student.subjects.push(subject);
    return subject + " added to " + student.name + "'s subjects";
  }
  return "Student not found";
}

function getStudent(studentId: number): Student | undefined {
  return findStudent(studentId);
}

function findStudent(studentId: number): Student | undefined {
  for (var i = 0; i < students.length; i++) {
    if (students[i].studentId === studentId) {
      return students[i];
    }
  }
  return undefined;
}
// Test cases (Create more if needed)
console.log(addStudent(1, "Alice", 20, ["Math", "Science"], "active")) // { studentId: 1, name: "Alice", age: 20, subjects: ["Math", "Science"], status: "active" }
console.log(updateStatus(1, "graduated")) // "Alice has graduated"
console.log(addSubject(1, "History")) // "History added to Alice's subjects"
console.log(getStudent(1)) // { studentId: 1, name: "Alice", age: 20, subjects: ["Math", "Science", "History"], status: "graduated" }