function sumSalary(salaries) {
 let sal = 0;
for (let salary of Object.values(salaries)){
sal += salary;
}
return sal;
}
let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}
alert(sumSalary(salaries));

