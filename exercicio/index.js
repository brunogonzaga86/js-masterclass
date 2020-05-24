const query = "create table author (id number, name string, age number, city string, state string, country string)";
let regularExp = /(\w+)\s(\w+)\s(\w+)\s\((.*)\)/;
let result = regularExp.exec(query);

let tableName = "";
let columns;
if (result){
  tableName = result[3];
  columns = result[4].split(',');
}

console.log(result);
console.log(tableName);
console.log(columns);