const companies = [
  { name: "Company One", category: "Finance", start: 1920, end: 1931 },
  { name: "Company Two", category: "Retail", start: 1980, end: 2000 },
  { name: "Company Three", category: "Auto", start: 1936, end: 1996 },
  { name: "Company Four", category: "Retail", start: 1940, end: 1993 },
  { name: "Company Five", category: "Technology", start: 1985, end: 1991 },
  { name: "Company six", category: "Retail", start: 1902, end: 1987 },
];

let ages = [16, 19, 21, 34, 25, 28, 40];

//forEach
// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }
//by using the Foreach function makes easier to read and under
// companies.forEach(function(Company) {
//     console.log(Company);
// });

// let  canDrink = []; //empty array
// for (let i = 0; i < age.length; i++) {
//     if (age[i] >= 21) {
//         console.log(age[i]);
//         //push append new element in the last  of an array and return new array
//         canDrink.push(age[i]);
//         console.log(canDrink);

//     }

// }
// Get age 21 and above
//filter
// //Methode I
//  const canDrink = ages.filter(function(age){
//      if(age >= 21){
//          return true;
//      }
//  })
//Methode II ,Es6 arrow function

// const canDrink = ages.filter((age) => age >= 21); // this makes you a better programmer
// console.log(canDrink);

//Filter only  retail companies

//  const retailCompany = companies.filter(function(company){
//    if(company.category === "Retail"){
//        return true;
//    }
//  })

//  console.log(retailCompany);

//Displaying using an Es6 arrow function
//Nice and clean way to write code
// const retailCompany = companies.filter(
//   (company) => company.category === "Retail"
// );
// console.log(retailCompany);

//  get the companies of 80s

// const eightiesCompany = companies.filter(company => company.start >= 1980 && company.end <= 1991)

// console.log(eightiesCompany);

//Getting the companies lasted for the last 10 years

// const tenYearCompanies = companies.filter(
//   (company) => company.end - company.start >= 10
// );
// console.log(tenYearCompanies);


//map (returns a new array )
// Create an array of the company names

// let  companyNames = companies.map(function(company){
//  return company.name;
// })
// console.log(companyNames);

//by using Es6 arrow  function 
// const companyNames = companies.map(company => company.name)
// console.log(companyNames);

// let  companyNames = companies.map(function(company){
//     return `${company.name} [${company.start} - ${company.end}]`;
// })
// console.log(companyNames);

// get the age and square it and retun new array
       
// const squareOfAge = ages.map(age => age * age)
// // Other option 

//we can use two or more Map methode together ( we can manipulate as we want)

// const ageMap = ages
//  .map(age => Math.sqrt(age)) //1st get the square
//  .map(age => age * 2)// then multiply by two

// console.log(ageMap);

//sort Companies by start year

// let  sortedCompanies = companies.sort(function(c1,c2){
//     if(c1.start > c2.start){
//         return 1;
//     }
//     else{
//         return -1;
//     }
// });
// console.log(sortedCompanies);

//writing by using arrow function 
//                                                    //condition
// const sortedCompanies = companies.sort( (c1,c2) => c1.start > c2.start ? 1 : -1)
// console.log(sortedCompanies);

//Sort ages 

// const sortedAge = ages.sort((c1 , c2) => c1 - c2);
// console.log(sortedAge);

//Reduce  = sumation
// Traditional way

// let ageSum = 0
// for(let i = 0; i < ages.length; i++){
//     ageSum += ages[i];
// }
// console.log(ageSum);



// const sumAge = ages.reduce(function(total, age ){
//     return total + age 
    
// })

// const sumAge = ages.reduce((total, age ) =>  total + age , 0 );
// console.log(sumAge);

//Get the total year of the all the companies

// const totalYears = companies.reduce(function (total, company){
//  return total + ( company.end - company.start);
// },0);

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start),0);
// console.log(totalYears);

//Lets Combine methods COMBINATION

const combinedAge = ages
.filter(age => age > 21)     
.map(age => age * 2)
.sort(( a, b) => ( a - b))
.reduce((age,total) => total + age, 0);
console.log(combinedAge);
