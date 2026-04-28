var student1 = ["Shyam", 60, 70, 40 , 80]
var student2 = ["Hari", 60, 90, 90, 80]
let sum = 0;
let avg = 0;
console.log("students name:");
console.log(student1[0] + " " + student2[0]);
for (let marks in student1) {
    if (marks == 0) { 
        continue;
    }
    sum += student1[marks];
}
avg = sum / (student1.length - 1);
console.log(student1[0] + " average: " + avg);

sum = 0;
avg = 0;

for (let marks in student2) {
    if (marks == 0) { 
        continue;
    }
    sum += student2[marks];
}
avg = sum / (student2.length - 1);
console.log(student2[0] + " average: " + avg);





//ssavr.com