/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//  Exercise A
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];


//  Exercise B
var all = boys.concat(girls);
  console.log(all);


//  Exercise C
  console.log(all.join('-'));
  console.log(all.join(','));


//  Exercise D and E
  console.log(all.push("Lone","Gitte"));
  console.log(all.unshift("Hans","Kurt"));
  console.log(all);


//  Exercise F and G
  console.log(all.shift("Hans"));
  console.log(all.pop("Gitte"));
  console.log(all);


//  Exercise H
  console.log(all.splice(2, 2));
  console.log(all);


//  Exercise I
  console.log(all.reverse());


//  Exercise J and K
  console.log(all.sort());
  var sorted = all.map(function (value) {
  return value.toLowerCase();
  }).sort();
  console.log(sorted);


//  Exercise L
  var sorted = all.map(function (value) {
  value = value.toUpperCase();
  return value;
  });
  console.log(sorted);


//  Exercise M
 let filtered = all.filter((name === name.startsWith("L)" )))

